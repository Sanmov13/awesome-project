import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    lastname: 'Tapchaev',
    city: 'Grozny',
    age: 25,
    first: 'Lecha',
    username: 'Tapch',
    currency: Currency.USD,
    country: Country.Canada,
};

describe('fetchProfileData.test', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
