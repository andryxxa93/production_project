let profileId: string;
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testUser');
    });
    it('Профиль редактируется', () => {
        cy.updateProfile();
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
    });
});
