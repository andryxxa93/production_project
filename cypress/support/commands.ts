import { USER_LOCALSTORAGE_KEY } from '../../src/shared/const/localStorage';

Cypress.Commands.add(
    'login',
    (username: string = 'testUser', password: string = 'password') => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        }).then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        });
    },
);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

export {};
