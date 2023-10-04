import { StateScheme } from '@/app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading.test', () => {
    test('should return profile isLoading', () => {
        const isLoading = true;
        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading,
            },
        };
        expect(getProfileLoading(state as StateScheme)).toEqual(isLoading);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileLoading(state as StateScheme)).toEqual(undefined);
    });
});
