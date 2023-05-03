import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { MountedReducers, ReducerManager, StateScheme } from './StoreSheme';

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<keyof StateScheme> = [];
    const mounterReducers: MountedReducers = {};
    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mounterReducers,
        reduce: (state: StateScheme, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: keyof StateScheme, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            mounterReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: keyof StateScheme) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);
            mounterReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
