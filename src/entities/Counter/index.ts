import type { CounterSchema } from './model/types/CounterSchema';
import { counterReducer } from './model/Slice/CounterSlice';
import { Counter } from './ui/Counter';

export {
    Counter,
    CounterSchema,
    counterReducer,
};
