import { CURRENCY } from '@/entitie/Currency';
import { COUNTRY } from '@/entitie/Country';

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
