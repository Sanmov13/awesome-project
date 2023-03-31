import { ValidateProfileError } from 'entities/Profile/model/types/Profile';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileData } from './ValidateProfileData';

const data = {
    lastname: 'Tapchaev',
    city: 'Grozny',
    age: 25,
    first: 'Lecha',
    username: 'Tapch',
    currency: Currency.USD,
    country: Country.Canada,
};

describe('ValidateProfileData.test', () => {
    test('fulfilled', async () => {
        const result = ValidateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = ValidateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = ValidateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = ValidateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect data', async () => {
        const result = ValidateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
