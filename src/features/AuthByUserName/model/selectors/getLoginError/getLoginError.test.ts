import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateScheme)).toEqual('error');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});
