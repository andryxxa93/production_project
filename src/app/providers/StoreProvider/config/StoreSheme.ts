import { UserSchema } from 'entitie/User';
import { LoginScheme } from 'features/AuthByUserName';

export interface StateScheme {
    user: UserSchema,
    loginForm?: LoginScheme,
}
