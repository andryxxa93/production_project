import { CURRENCY } from 'entitie/Currency/model/types/currency';
import { COUNTRY } from 'entitie/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    'first'?: string,
        'lastname'?: string,
        'age'?: number,
        'currency'?: CURRENCY,
        'country'?: COUNTRY,
        'city'?: string,
        'username'?: string,
        'avatar'?: string,
    id?: string;
}

export interface ProfileScheme {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string;
    readonly?: boolean;
    validateError?: ValidateProfileError[];
}
