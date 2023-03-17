import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateScheme)).toEqual('password');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
