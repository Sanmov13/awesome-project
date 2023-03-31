import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/Profile';
import { getProfileErrors } from './getProfileErrors';

describe('getProfileErrors.test', () => {
    test('should return errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.NO_DATA,
                ],
            },
        };
        expect(getProfileErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.NO_DATA,
        ]);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileErrors(state as StateSchema)).toEqual(undefined);
    });
});
