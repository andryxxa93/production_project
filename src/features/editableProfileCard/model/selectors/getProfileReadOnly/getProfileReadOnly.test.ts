import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileLoading.test', () => {
    test('should return profile readonly', () => {
        const readonly = true;
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly,
            },
        };
        expect(getProfileReadOnly(state as StateScheme)).toEqual(readonly);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileReadOnly(state as StateScheme)).toEqual(undefined);
    });
});
