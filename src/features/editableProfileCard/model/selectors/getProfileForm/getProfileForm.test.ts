import { StateScheme } from '@/app/providers/StoreProvider';
import { CURRENCY } from '@/entitie/Currency';
import { COUNTRY } from '@/entitie/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form data', () => {
        const form = {
            first: 'Андрей',
            lastname: 'Гордиенко',
            age: 30,
            currency: CURRENCY.EUR,
            country: COUNTRY.RUSSIA,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://static7.tgcnt.ru/posts/_0/95/95b965a38d28100849bcc1f2fe78d992.jpg',
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateScheme)).toEqual(form);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
