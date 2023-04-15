import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { CURRENCY } from 'entitie/Currency';
import { COUNTRY } from 'entitie/Country';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
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
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
