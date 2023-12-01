import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestsProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestsProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '1',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id="1" />
            </TestsProvider>,
        );
    });
});
