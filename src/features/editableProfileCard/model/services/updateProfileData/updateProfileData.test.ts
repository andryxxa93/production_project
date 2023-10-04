import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { CURRENCY } from '@/entitie/Currency';
import { COUNTRY } from '@/entitie/Country';
import { ValidateProfileError } from '../../consts/consts';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData.test', () => {
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
        id: '1',
    };

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('error from client side', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, age: undefined },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
