# Myer Account Management - Login and Profile Update

This project is a test automation suite for Myer Account Management, focusing on login and profile update functionalities using Playwright and @cucumber/cucumber.

## Project Structure
```
├── tests
│   ├── features
|   |   └── create_account.feature
│   ├── pages
│   │   ├── account.page.ts
│   │   ├── change-password.page.ts
│   │   ├── login.page.ts
│   │   └── menu-bar.page.ts
│   ├── steps
│   │   ├── account.step.ts
│   │   ├── login.step.ts
│   │   └── menu-bar.step.ts
|   ├── support
|   |   ├── hooks.ts
│   │   └── world.ts
|   ├── test-data
|   |   └── user-data.json
|   └── utils
|       └── string-util.ts
├── .gitignore
├── cucumber.json
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Install Playwright browsers:
    ```sh
    npx playwright install --with-deps
    ```

4. Generate Playwright config file in js:
    ```sh
    npm run setup
    ```

## Usage
1. Run the tests:
    ```sh
    npm run test
    ```

## Running Tests

To run the tests, use the following command:
```sh
npm run test
```
Or
```sh
npx cucumber-js
```

You can also run specific tests by specifying the test file:
```sh
npx cucumber-js tests/features/create_account.feature
```

## Project Features

### Login and Profile Update

- **Log in with an existing account**
- **Verify account settings page**
- **Update last name and mobile number**
- **Update password**
- **Validate changes persist after logout and re-login**

### Feature File

The feature file `create_account.feature` contains the scenarios for testing the Myer Account Management functionalities.

### Page Objects

The pages directory contains the Page Object Model (POM) classes for different pages of the application:
- `account.page.ts`: Page object for Account page.
- `change-password.page.ts`: Page object for Change Password page.
- `login.page.ts`: Page object for Login page.
- `menu-bar.page.ts`: Page object for Menu bar, which is visible on every page.

### Support

The support directory contains support files for the project:
- `hooks.ts`: Setup and teardown of browsers.
- `world.ts`: Contains common methods that are used in every page object classes, also has page instance of the browser.

### Test Data

The test-data directory contains test data files for the project:
- `user-data.json`: Contains credentials to login

### Utilities

The utils directory contains test data files for the project:
- `string-util.ts`: Contains function to generate randomized test data

### Reporting

With the integration of Github Actions, after every test run, a deployment of gh-pages is triggered.
Lastest cucumber report can then be viewed here: [![Latest Cucumber report(https://img.shields.io/badge/Live%20Demo-Click%20Here-blue)](https://sotatek-duyle.github.io/myer-test-automation/cucumber-report.html)