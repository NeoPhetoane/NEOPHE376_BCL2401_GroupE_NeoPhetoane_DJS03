# DJS03 Project Brief: Book Connect - Abstractions

Dive into the delightful world of "Book Connect," where literary adventures await at your fingertips! Browse, explore, and uncover your next great read from a vast, vibrant collection. Whether you're a fan of thrilling mysteries, epic fantasies, or heartwarming romances, "Book Connect" brings the magic of books directly to you. Happy reading! 

The "Book Connect" project provides an opportunity for students to refine a fully functional version of an application. The focus of this project is to enhance the code's maintainability, extendibility, and readability by applying concepts of objects and functions for abstraction. This will not only streamline future modifications but also consolidate students' understanding of higher-level programming concepts, including documentation, Styleguides, and abstraction principles.

![alt text](image.png)

#### Goals

- **Refactor Existing Code**: Analyse and refactor the given JavaScript and HTML code to improve its structure using objects and functions.
- **Implement Abstraction**: Use abstraction to hide the complex reality while exposing only the necessary parts. This involves creating more generic functions that can perform tasks in a more flexible way.
- **Documentation**: Write clear comments and documentation for the new code structure to explain the purpose and functionality of code blocks, functions, and objects.
- **Follow Styleguides**: Adhere to established coding conventions and Styleguides to ensure code readability and maintainability.

#### Tasks

1. **Code Analysis**: Start by understanding the current implementation of the "Book Connect" application, including its HTML structure and JavaScript functionality.
2. **Plan Refactoring**: Identify sections of the code that can be made more abstract and modular. Look for patterns and repetitive code that can be simplified.
3. **Implement Abstraction**:
   - **Objects**: Define objects to represent key elements of the application, such as books, authors, and genres. Utilise the provided data (e.g., `authors`, `genres`, `books`) to populate these objects.
   - **Functions**: Create functions that handle repetitive tasks, such as rendering the book list, handling user interactions, and applying filters.
4. **Enhance Functionality**: Ensure that the application remains fully functional after refactoring. Test all features to confirm that users can still search, filter, and view books as intended.
5. **Documentation and Comments**: Throughout the refactoring process, document your code. Provide comments that explain the purpose and functionality of objects and functions.
6. **Adherence to Styleguides**: Ensure your code follows JavaScript and HTML coding standards and best practices for readability and maintainability.

#### Discussion and Reflection

After completing the tasks, prepare a brief presentation for your coaching group on the following:
- The rationale behind the refactoring decisions made, including the choice of objects and functions.
- How abstraction has made the code more maintainable and extendable.
- Any challenges faced during the refactoring process and how they were overcome.
- Reflections on how this exercise has deepened your understanding of JavaScript programming concepts.

#### Submission Guidelines

Submit the refactored version of the "Book Connect" application, including all HTML, CSS, and JavaScript files. Ensure that your code is well-documented and adheres to the specified Styleguides. Include a written report covering the discussion and reflection points outlined above.

Make sure to submit your project to the LMS on the DJS03 Project Tab.



**Bookstore App Refactoring**
This project is a refactoring of a bookstore app that displays a list of books and allows users to search them by genre and author, and title. The refactoring was to make the code more abstract using functions to improve readability, modularity and maintainability. 



**Rationale Behind Refactoring Decisions**

The refactoring process involved several decisions, including:

Functions: The code was refactored to use functions to encapsulate related functionality and data. For example"

 .The createBookElement function was created to unify the creation of a book element, 
 .The renderBooks function was created to encapsulate the rendering of the book list
 .The createOptionElement reated a function to generate <option> elements for dropdowns. This avoids repetitive code and makes it easier to manage dropdown options.
 .renderGenres and renderAuthors created functions to dynamically populate the genre and author dropdowns.

applyTheme utilises a ternary operator to simplify the if/else option.




**How Abstraction Has Made the Code More Maintainable and Extendable**
Abstraction has made the code more maintainable and extendable by encapsulating related functionality and data in objects and functions. This makes it easier to modify or extend the functionality without affecting other parts of the code. For example, if a new feature needs to be added to the book element, it can be done by modifying the createBookElement function without affecting other parts of the code.

**Challenges Faced During the Refactoring Process and How They Were Overcome**
One challenge faced during the refactoring process was the need to maintain the existing functionality while improving the code's structure and maintainability. This was overcome by carefully reviewing the existing code and cross referencing as I edited to ensure that all of its crucial parts were present in the new version.

**Reflections on How This Exercise Has Deepened Understanding of JavaScript Programming Concepts**
This exercise has deepened my understanding of JavaScript programming concepts, including:

Objects and Functions: The refactoring process involved the use of objects and functions to encapsulate related functionality and data. This has improved my understanding of how to use objects and functions to create modular and maintainable code.

Abstraction: The use of abstraction has improved my understanding of how to create code that is more maintainable and extendable. By encapsulating related functionality and data in objects and functions, it is easier to modify or extend the functionality without affecting other parts of the code. I makes the code much easier to use because if the same function is necessary for multiple uses, you can simply call it within that instance withput writing its contents over and over again.
Modularity: The refactoring process has improved my understanding of how to create modular code that is easier to read, understand, and maintain. By encapsulating related functionality and data in objects and functions, it is easier to modify or extend the functionality without affecting other parts of the code.