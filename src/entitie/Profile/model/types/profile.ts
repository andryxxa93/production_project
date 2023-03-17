import { COUNTRY, CURRENCY } from 'shared/const/common';

export interface Profile {
    'first': string,
        'lastname': string,
        'age': number,
        'currency': CURRENCY,
        'country': COUNTRY,
        'city': string,
        'username': string,
        'avatar': string
}

export interface ProfileScheme {
    data?: Profile,
    isLoading: boolean,
    error?: string;
    readonly?: boolean;
}
