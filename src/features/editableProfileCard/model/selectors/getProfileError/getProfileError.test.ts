import { StateScheme } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return profile error', () => {
        const error = 'error';
        const state: DeepPartial<StateScheme> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateScheme)).toEqual(error);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileError(state as StateScheme)).toEqual(undefined);
    });
});
