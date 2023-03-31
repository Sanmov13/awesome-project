import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return state', () => {
        const data = {
            lastname: 'Tapchaev',
            city: 'Grozny',
            age: 25,
            first: 'Lecha',
            username: 'Tapch',
            currency: Currency.USD,
            country: Country.Canada,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
