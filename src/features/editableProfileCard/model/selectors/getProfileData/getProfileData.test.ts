import { StateScheme } from 'app/providers/StoreProvider';
import { CURRENCY } from 'entitie/Currency';
import { COUNTRY } from 'entitie/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
