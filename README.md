# Page Objects vs GUI Custom Commands

This is a sample project to demonstrate the differences between writing end-to-end tests using the **Page Objects** pattern, using [**Cypress custom commands**](https://docs.cypress.io/api/cypress-api/custom-commands), or none of them at all.

The application under test is [**Mattermost Preview Mode**](https://github.com/mattermost/mattermost-docker-preview), and it can be found on [**Docker Hub**](https://hub.docker.com/r/mattermost/platform).

## Installation

Here you will find instructions for installing the **dev dependencies**, besides the installation of the application under test (**dev environment**).

### Dev Dependencies

Run `npm install` to install the dev dependencies.

> You will need [Node.js](http://nodejs.org) and NPM installed for it.

### Dev environment

For installation instructions of **Mattermost**, read [**their official documentation**](https://docs.mattermost.com/install/docker-local-machine.html).

## Running the tests

Here you will find instructions for running the tests in both headless and interactive modes.

### Headless Mode

With the Mattermost application up-and-running, run `npm test` to run the tests in headless mode.

### Interactive Mode

With the Mattermost application up-and-running, run `npm run cy:open` to open the Cypress Runner, then click the <kbd>> Run 1 integration spec</kbd> button to run the tests in interactive mode.

## Implementation

Here you will find the implementation of:

- [The tests](./cypress/integration/signup.spec.js)
- [The Page Object](./cypress/pageObjects/signup.js)
- [And the GUI custom command](./cypress/support/commands.js)

___

Made with 💚 by [Walmyr](https://walmyr.dev).
