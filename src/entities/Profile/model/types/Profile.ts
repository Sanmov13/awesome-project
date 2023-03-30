import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency/model/types/Currency';

export const enum ValidateProfileError {
    INCORRECT_USER_DATA = 'Некорректные имя или фамилия',
    INCORRECT_AGE = 'Некорректный возраст',
    INCORRECT_COUNTRY = 'Некорректная страна',
    SERVER_ERROR = 'Ошибка сервера',
    NO_DATA = 'Нет данных'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
