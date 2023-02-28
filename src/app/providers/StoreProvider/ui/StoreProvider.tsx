import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

export interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateScheme>,
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateScheme);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
