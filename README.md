# Code With Moses

Welcome to Code With Moses, a project aimed at providing a platform for collaborative coding, learning, and sharing knowledge. This project is inspired by Code With Antonio and follows a similar structure. The goal is to create a community-driven platform where developers can work together, contribute, and enhance their coding skills. Below is a detailed guide on the project, its technology stack, setup instructions, and how to contribute.

## Project Overview

- **Live Demo**: [Code With Moses](https://code-with-moses.vercel.app)
- **Clone 😃**: [Code With Moses](https://www.codewithantonio.com/)

## Tech Stack

This project is built with the following technologies:

- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Hook Form](https://react-hook-form.com/): Performant, flexible, and extensible forms with easy-to-use validation.
- [React Toastify](https://github.com/fkhadra/react-toastify): A React notification library.
- [Yarn](https://yarnpkg.com/): A fast, reliable, and secure dependency management tool.

## Project Structure

The project has been set up with CRUD operations and MongoDB integration. Prisma is also connected to facilitate database interactions. The UI is complete, and now the focus is on implementing the backend functionalities.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/code-with-moses.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd code-with-moses
   ```

3. **Install Dependencies:**

   ```bash
   yarn install
   ```

4. **Run the Development Server:**

   ```bash
   yarn dev
   ```

   The development server should be running at [http://localhost:3000](http://localhost:3000).

5. **Set Up MongoDB:**
   Ensure you have MongoDB installed locally or provide connection details in the appropriate configuration file.

6. **Run Prisma Migrations:**
   ```bash
   npx prisma migrate dev
   ```

## Contributing

We welcome and encourage contributions from the community. To contribute to Code With Moses, follow these steps:

1. **Fork the Repository:**
   Click on the "Fork" button on the top right corner of the repository.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/your-username/code-with-moses.git
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes and Commit:**
   Make your desired changes and commit them. Please follow the coding standards.

5. **Push Changes to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request:**
   Open a pull request on the main repository. Provide a detailed description of your changes.

## Code of Conduct

Please note that this project follows a [Code of Conduct](CODE_OF_CONDUCT.md). Make sure to read and adhere to it.

## License

This project is licensed under the [MIT License](LICENSE).

Happy Coding! 🚀
