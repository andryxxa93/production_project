import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from '@/entitie/User';
import { $api } from '@/shared/api/api';
import { scrollReducer } from '@/features/ScrollSaver';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateScheme, ThunkExtraArg } from './StoreSheme';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        user: userReducer,
        scrollSaver: scrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
