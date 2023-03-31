import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
