# WorkMotion Platform automation Tests


## ***How to run tests locally:***

**This guide will walk you through setting up the environment and running automated tests locally.**

#### **1. Prerequisites**

**Before running the tests, ensure the following tools are installed:**
- `Node.js` : Download and install it using [this link](https://nodejs.org/en/download/package-manager)

  Verify the installation:
  ```bash
  node --version
  npm --version
    ```
- `Git` : It using to clone the repository. Download it from [this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- `VS Code` or any modern IDE.

#### **2. Clone the Repository**

- Clone the project repository from GitHub:
    ```bash
    git clone git@github.com:taghreed86/workmotion_tech_task.git
    ```
   
- Open it in `VS Code`.
    Open `VS Code`-------> Open `File` menu ---------> Select `Open Folder` option ---------> Open the project folder.>
    Open `Terminal` menu -----------> Select `New Terminal` option


#### **3. Install Dependencies**

**Install all required packages, including Cypress and Cucumber Preprocessor for Cypress:**
   ```bash
    npm install cypress --save-dev
  ```

  ```bash
    npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
  ```

  ```bash
    npm install --save-dev @badeball/cypress-cucumber-preprocessor
  ```

  ```bash
    npm install --save-dev @cypress/webpack-preprocessor
  ```

  ```bash
    npm install --save-dev webpack webpack-cli
  ```
 
#### **4. Run Tests**

**To run all tests, execute the following command:**
 - Open Cypress UI:
  ```bash
  npx cypress open
  ```
 - Run in headless mode:
    ```bash
  npx cypress run
  ```

**To run all tests in headed mode:**
```bash
npx playwright test --headed
```

**To run tests and generate HTML Report:**
```bash
npx playwright test --reporter=html
```

**To show the generated HTML Report:**
```bash
npx playwright show-report 
```

**To run tests and generate Allure Report:**
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

**To show the generated Allure report:**
```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

**To run all tests in debug mode:**
```bash
npx playwright test --debug
```

**To debug one test on a specific line, run the following command:**
```bash
npx playwright test <tests_file>:<line_number> --debug
```
***Now you are ready to run the Automated tests for Deel Salary Insights locally!*** 🚀