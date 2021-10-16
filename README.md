# Automated framework for Todoist

This is a Test Automation Framework for the Todoist Application. It covers Functional Tests.

## Tools to Automate

* TestCafe

### Prerequisites

* Nodejs
* NPM

### Setting up

Clone the repo and run the following command in order to install the dependencies:

```
npm install
```

## Running the tests

Go to the `package.json` and search for the testcafe scripts (i.e. test:chrome). In order to run them you can use npm as follows:

### Running per browser:

```
npm run test:chrome
```

```
npm run test:safari
```

### Running per feature:

```
npm run test:login
```

```
npm run test:task
```

```
npm run test:project
```

### Running Smoke testing:

```
npm run test:smoke:testing
```

### Running Headless mode:

```
npm run test:headless
```

### Running tests with Reports:
```
npm run test:report:html
```

```
npm run test:report:json
```

```
npm run test:report:xunit
```

```
npm run test:report:list
```

```
npm run test:report:nunit
```


TestCafe will be automatically executed using your local chrome/safari/firefox version installed in your machine and will perform all the tests specified in the command.

Note: If no specific tests are specified, it will run all the tests inside the folder selected in the script.


## Built With

* [TestCafe](https://testcafe.io/) - The Functional Automation used for Web/FE


.
