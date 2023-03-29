import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { CURRENCY } from 'entitie/Currency';
import { COUNTRY } from 'entitie/Country';
import { ValidateProfileError } from 'entitie/Profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateScheme;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

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

    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
