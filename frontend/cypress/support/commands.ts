/// <reference types="cypress" />

import { MountOptions, MountReturn } from 'cypress/react18';
import { mount } from "cypress/react18";


Cypress.Commands.add('mount', (component, options) => {
  return mount(component, options);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * .
       * @param component
       * @param options
       */
      mount(component: React.ReactNode, options?: MountOptions): Chainable<MountReturn>;
    }
  }
}
