import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entitie/Profile';
import { COUNTRY } from '@/entitie/Country';
import { CURRENCY } from '@/entitie/Currency';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from '../EditableProfileCard/EditableProfileCard';

const profile: Profile = {
    id: '1',
    username: 'username',
    age: 21,
    country: COUNTRY.USA,
    first: 'Andrew',
    lastname: 'Gordienko',
    currency: CURRENCY.RUB,
    city: 'Moscow',
};

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'username',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('EditableProfileCard', () => {
    test('should change readonly mode to false', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('should change readonly mode to false', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(options.initialState.profile.data.first);
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(options.initialState.profile.data.lastname);
    });

    test('should show Error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('should send put request to server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
