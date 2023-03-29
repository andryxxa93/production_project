import { StateScheme } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entitie/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return profile validate errors', () => {
        const validateError = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<StateScheme> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(validateError);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});
