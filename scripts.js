import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

let page = 1; //This variable keeps track of the page number.
let matches = books;

//Function that makes the books available so the element below can display them.
function renderBooks(books) {
  const fragment = document.createDocumentFragment();
  books.forEach((book) => {
    const element = createBookElement(book);
    fragment.appendChild(element);
  });
  document.querySelector("[data-list-items]").appendChild(fragment);
}

//Creates element to display the books on screen as a button with and image, title and author.
function createBookElement({ author, id, image, title }) {
  const element = document.createElement("button");
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />

        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

  return element; //Return to provide the created element back to the caller for flexible use
}

//Gives out the list of genres

function renderGenres() {
  const genreHtml = document.createDocumentFragment();
  const firstGenreElement = document.createOptionElement("All Genres", "any");
  genreHtml.appendChild(firstGenreElement);

  for (const [id, name] of Object.entries(genres)) {
    const element = document.createOptionElement(name, id);
    genreHtml.appendChild(element);
  }

  document.querySelector("[data-list-items]").appendChild(genreHtml);
}

//Author distributor
function renderAuthor() {
  const authorsHtml = document.createDocumentFragment();
  const firstAuthorElement = document.createOptionElement("All authors", "any");
  authorsHtml.appendChild(firstAuthorElement);

  for (const [id, name] of Object.entries(authors)) {
    const element = document.createOptionElement(name, id);
    authorsHtml.appendChild(element);
  }

  document.querySelector("[data-search-authors]").appendChild(authorsHtml);
}
//Dropdown options
function createOptionElement(text, value) {
    const element = document.createElement("option");
    element.value = value;
    element.innerText = text;
    return element;


}
//Theme setting simplified into ternery operators

function applyTheme(theme) {
  const isDark = theme === "night";
  document.querySelector("[data-settings-theme]").value = theme;
  document.documentElement.style.setProperty(
    "--color-dark",
    isDark ? "255, 255, 255" : "10, 10, 20"
  );
  document.documentElement.style.setProperty(
    "--color-light",
    isDark ? "10, 10, 20" : "255, 255, 255"
  );
}

//Filters that group the books according to title, genre and author to enable to user the search them respectively.

function applyFilters(formData) {
  const filters = Object.fromEntries(formData);
  return books.filter((book) => {
    let genreMatch = filters.genre === "any";

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    return (
      (filters.title.trim() === "" ||
        book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === "any" || book.author === filters.author) &&
      genreMatch
    );
  });
}

//Events

document.querySelector("[data-list-button]").innerText = `Show more (${
  books.length - BOOKS_PER_PAGE
})`;
document.querySelector("[data-list-button]").innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${
      matches.length - page * BOOKS_PER_PAGE > 0
        ? matches.length - page * BOOKS_PER_PAGE
        : 0
    })</span>
`;

document.querySelector("[data-search-cancel]").addEventListener("click", () => {
  document.querySelector("[data-search-overlay]").open = false;
});

document
  .querySelector("[data-settings-cancel]")
  .addEventListener("click", () => {
    document.querySelector("[data-settings-overlay]").open = false;
  });

document.querySelector("[data-header-search]").addEventListener("click", () => {
  document.querySelector("[data-search-overlay]").open = true;
  document.querySelector("[data-search-title]").focus();
});

document
  .querySelector("[data-header-settings]")
  .addEventListener("click", () => {
    document.querySelector("[data-settings-overlay]").open = true;
  });

document.querySelector("[data-list-close]").addEventListener("click", () => {
  document.querySelector("[data-list-active]").open = false;
});

//Theme function application
document
  .querySelector("[data-settings-form]")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);
    applyTheme(theme);
    document.querySelector("[data-settings-overlay]").open = false;
  });

//Search submission

document
  .querySelector("[data-search-form]")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    matches = applyFilters(formData);
    renderFilteredBooks(matches);
    document.querySelector("[data-search-overlay]").open = false;
  });

document.querySelector("[data-list-button]").addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    const element = document.createElement("button");
    element.classList = "preview";
    element.setAttribute("data-preview", id);

    element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />

            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

    fragment.appendChild(element);
  }

  document.querySelector("[data-list-items]").appendChild(fragment);
  page += 1;
});

document
  .querySelector("[data-list-items]")
  .addEventListener("click", (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (const node of pathArray) {
      if (active) break;

      if (node?.dataset?.preview) {
        let result = null;

        for (const singleBook of books) {
          if (result) break;
          if (singleBook.id === node?.dataset?.preview) result = singleBook;
        }

        active = result;
      }
    }

    if (active) {
      document.querySelector("[data-list-active]").open = true;
      document.querySelector("[data-list-blur]").src = active.image;
      document.querySelector("[data-list-image]").src = active.image;
      document.querySelector("[data-list-title]").innerText = active.title;
      document.querySelector("[data-list-subtitle]").innerText = `${
        authors[active.author]
      } (${new Date(active.published).getFullYear()})`;
      document.querySelector("[data-list-description]").innerText =
        active.description;
    }
  });

renderBooks(matches.slice(0, BOOKS_PER_PAGE)); //Function call to display the preview
renderGenres();
renderAuthor();
