import { UserSchema } from 'entitie/User';
import { LoginScheme } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateScheme {
    user: UserSchema,
    loginForm?: LoginScheme,
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: keyof StateScheme, reducer: Reducer) => void;
    remove: (key: keyof StateScheme) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}
