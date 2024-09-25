Code of Conduct

Commit Conventions

General Format:
<type>[optional scope]: <action> <description>
Example: feat(auth): add login functionality
Commit Types:
feat: A new feature for the end user.
fix: A bug fix.
docs: Documentation changes.
style: Changes that do not affect the code logic (spacing, formatting, etc.).
refactor: Code changes that do not affect its functionality.
test: Adding or modifying tests.
chore: Tasks not related to code, such as configuration changes.

Action Types:
add: Used when adding new functionality, files, or resources to the project.
update: Used when making changes to something existing, improving or adjusting it.
remove: Used when deleting code, files, or dependencies.
fix: Used when fixing a bug or issue in the code.
refactor: Used when restructuring the code without altering its behavior to make it cleaner or more efficient.
improve: Used when improving the efficiency or performance of something existing, without necessarily adding new functionality.
rename: Used when renaming files, variables, or functions.
move: Used when changing the location of files or folders in the project.


Setup Instructions
Prerequisites: Before starting, ensure you have the following programs installed on your system:
Node.js: Make sure you have the latest stable version of Node.js installed. You can download it from nodejs.org.
npm: Included with Node.js, but make sure to have the latest version by running npm install -g npm.

Clone the Repository: First, clone the project repository from GitHub:
git clone https://github.com/ZDavid73/Cardpages
cd repository-name

Install Dependencies: Once you have cloned the repository, install the project dependencies using npm:
npm install or npm i
Run the Project: To start the development server, run:
npm run dev

Additional Documentation: Check the project documentation in docs/README.md for more details on contributing and other specific project configurations.


Branching Model
main or master: This is the main branch containing stable production code.
Warning: Only fully tested and release-ready code is merged into this branch.
develop: This branch integrates new features and fixes before being merged into main.
Warning: Features branches are merged here and preparations for releases are made.
feature: This branch is used to develop new features or functionalities.
Warning: Created from develop and merged back into develop when development is complete.
hotfix: Used to fix critical bugs in the main or master branch.
Warning: This branch is created from main, and once the issue is resolved, it is merged into both main and develop.


Technologies/Libraries to Use While Developing the Project
Husky: Husky is a great option for ensuring commits are consistent and comply with established rules.
Swiper: Swiper is one of the most popular and versatile carousel libraries for React and other frameworks. It offers many features such as touch sliding, navigation, and transition effects.
Firebase Authentication: Firebase provides a comprehensive solution for user authentication, with support for email login, social networks, and more.
Styled Components: Styled Components is a highly flexible and powerful option for handling styles in React applications and can be especially useful in projects where modularity and component reuse are important.
