/// <reference types="cypress" />

import { MountOptions, MountReturn } from 'cypress/react18';

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
