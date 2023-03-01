import { CounterScheme } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateScheme {
    counter: CounterScheme,
    user: UserSchema,
}
