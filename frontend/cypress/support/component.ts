import { mount } from 'cypress/react18';
import "@badeball/cypress-cucumber-preprocessor";


Cypress.Commands.add('mount', mount);
console.log("Component support file loaded.");
