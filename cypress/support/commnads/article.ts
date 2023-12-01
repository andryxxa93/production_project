import { Article } from '../../../src/entitie/Article';

const defaultArticle = {
    id: 'TESTING ARTICLE',
    title: 'Django new',
    subtitle: 'Что нового в Django за 2022 год?',
    img: 'https://www.logolynx.com/images/logolynx/72/72ec7634ecb542ba996851d6621dde79.jpeg',
    views: 590,
    createdAt: '26.02.2023',
    userId: '1',
    type: ['IT'],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'token',
            },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'token',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
