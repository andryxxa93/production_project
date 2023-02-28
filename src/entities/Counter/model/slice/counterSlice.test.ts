import { counterReducer, counterActions } from '../slice/counterSlice';
import { CounterScheme } from '../types/CounterScheme';

describe('counterSlice', () => {
    test('decrement counter', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state as CounterScheme, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('increment counter', () => {
        const state: CounterScheme = {
            value: 10,
        };
        expect(counterReducer(state as CounterScheme, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
