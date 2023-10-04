import { CURRENCY } from '@/entitie/Currency/model/types/currency';
import { COUNTRY } from '@/entitie/Country/model/types/country';

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
