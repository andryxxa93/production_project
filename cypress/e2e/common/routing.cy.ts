import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get('[data-testid=MainPage]').should('exist');
        });
    });
    describe('Переход открывает страницу профиля', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/profile/1');
            cy.get('[data-testid=MainPage]').should('exist');
        });
    });
    describe('Переход на несуществующий маршрут', () => {
        it('Переход на 404 страницу', () => {
            cy.visit('/asasalkjlk');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход открывает страницу профиля', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
