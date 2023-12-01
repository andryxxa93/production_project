import * as commonCommands from './commnads/common';
import * as profileCommands from './commnads/profile';
import * as articleCommands from './commnads/article';
import * as commentsCommands from './commnads/comments';
import * as rateCommands from './commnads/rating';

Cypress.Commands.addAll(commonCommands);

Cypress.Commands.addAll(profileCommands);

Cypress.Commands.addAll(articleCommands);

Cypress.Commands.addAll(commentsCommands);

Cypress.Commands.addAll(rateCommands);

export {};
