
# AiLearnt README

## Project Context

AiLearnt is a web application designed to facilitate learning through AI-enhanced tools. The front end of the application is built using React, JavaScript, HTML, and CSS, and is hosted on GitHub Pages for its ease of deployment and automatic updates when changes are pushed to the main repository. The server side utilizes Node, Express, and Axios and is hosted on Cyclic, chosen for its capabilities in hosting without an initial host and its support for environment variables. This setup ensures greater privacy and control, particularly when integrating the OpenAI API.

## Development Environment Setup

To set up the development environment for AiLearnt:

1. **Clone the repository**:
   ```bash
   git clone [repository-link]
   cd AiLearnt
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add environment variables like `API_KEY` for OpenAI and Azure.

4. **Start the development server**:
   ```bash
   npm start
   ```

   This command will run the front end on `localhost:3000` and the backend on a separate port specified in your setup.

## How to Run Locally

To run AiLearnt locally after setting up your environment:

1. **Start the backend server**:
   ```bash
   node server.js
   ```

2. **Start the frontend application**:
   ```bash
   npm start
   ```

   The application should now be accessible at `http://localhost:3000`.

## Running Tests

To run the unit tests with Jest:

```bash
npm test
```

This command executes the test cases defined in the project, ensuring all functionalities work as expected before pushing to the remote repository.

## Additional Resources

- **Public URL**: [Public URL](https://alexcodes100.github.io/finalTest)
- **Project Demo**: [Demo Link](https://www.youtube.com/watch?v=JoLJa6DIWNM)
- **Reports and Presentations**: [Reports Link](#)
- **GitHub Repository**: [GitHub Link](https://github.com/Chokitu/2350-Project/edit/main/README.md)

## Features

### Dynamic Translations

Provides proficient translations of AI-generated and static text in the user's chosen language during the tutorial. The selected language persists for the tutorial's duration.

**User Story**:
_As an immigrant, I want to learn in my mother tongue so I can have a better understanding of what I am studying._

### Resource Recommendations

Recommends the best current AI resources based on user-selected goals from a menu covering common AI applications.

**User Story**:
_As a student, I want to be able to find AI resources that will assist me in my school projects._

### Practical Applications and Examples Tutorial

Teaches users how to use AI to write essays, providing assistance rather than writing the entire essay.

**User Story**:
_As a student, I want to learn more about AI dynamically, especially when I need it for school projects._

## APIs Used

- OpenAI
- Microsoft Azure

For further details on the project setup, features, and more, refer to the links provided above.
