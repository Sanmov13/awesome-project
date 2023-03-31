import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfleData';
import { ProfileSchema, ValidateProfileError } from '../types/Profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    lastname: 'Tapchaev',
    city: 'Grozny',
    age: 25,
    first: 'Lecha',
    username: 'Tapch',
    currency: Currency.USD,
    country: Country.Canada,
};

describe('profileSlice.test', () => {
    test('test setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('update Profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '12345' }),
        )).toEqual({
            form: {
                username: '12345',
            },
        });
    });

    test('extraReducers', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('extraReducers fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
