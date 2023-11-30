let currentArticleId: string;
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`article/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it.skip('статья подгружается', () => {
        cy.getByTestId('ArticlesDetails.Info').should('exist');
    });
    it.skip('видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it.skip('и оставляет комментарий', () => {
        cy.getByTestId('ArticlesDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('AddCommentForm.Input').should('have.value', 'text');
    });
    it('и выставляет рейтинг', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticlesDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
