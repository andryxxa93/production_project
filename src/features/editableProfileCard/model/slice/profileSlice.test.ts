import { CURRENCY } from 'entitie/Currency';
import { COUNTRY } from 'entitie/Country';
import { ProfileScheme, ValidateProfileError } from '../types/editableProfileCardSchema';
import { profileReducer, profileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
    const data = {
        first: 'Андрей',
        lastname: 'Гордиенко',
        age: 30,
        currency: CURRENCY.EUR,
        country: COUNTRY.RUSSIA,
        city: 'Moscow',
        username: 'admin',
        avatar: 'https://static7.tgcnt.ru/posts/_0/95/95b965a38d28100849bcc1f2fe78d992.jpg',
    };

    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(state as ProfileScheme, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileScheme, profileActions.cancelEdit()))
            .toEqual({
                data, form: data, readonly: true, validateError: undefined,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { ...data } };
        expect(profileReducer(state as ProfileScheme, profileActions.updateProfile({ username: 'Ivan' })))
            .toEqual({
                data, form: { ...data, username: 'Ivan' },
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = { isLoading: false, validateError: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileScheme, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                error: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = { isLoading: true };
        expect(profileReducer(state as ProfileScheme, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                data,
                form: data,
                readonly: true,
                validateError: undefined,
            });
    });
});
