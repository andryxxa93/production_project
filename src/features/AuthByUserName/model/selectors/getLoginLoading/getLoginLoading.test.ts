import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateScheme)).toEqual(true);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginLoading(state as StateScheme)).toEqual(undefined);
    });
});
