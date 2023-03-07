import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entitie/User';
import { loginReducer } from 'features/AuthByUserName';
import { StateScheme } from './StoreSheme';

export function createReduxStore(initialState: StateScheme) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateScheme>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
