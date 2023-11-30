export const updateProfile = () => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type('new');
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
    cy.getByTestId('ProfileCard.lastname').clear().type('lastname');
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
        Authorization: 'token',
    },
    body: {
        id: '4',
        first: 'testUser',
        lastname: 'asf',
        age: 465,
        currency: 'RUB',
        country: 'ENGLAND',
        city: 'Moscow',
        username: 'testUser',
        avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
