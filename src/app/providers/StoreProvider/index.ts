import { AppDispatch, createReduxStore } from './config/store';
import type { StateScheme } from './config/StoreSheme';
import { StoreProvider } from './ui/StoreProvider';
import { ReduxStoreWithManager, ThunkExtraArg, ThunkConfig } from './config/StoreSheme';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
    StateScheme,
};
