import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateScheme } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in keyof StateScheme]?: Reducer;
}

type ReducerListEntry = [keyof StateScheme, Reducer];

export interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    children: ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children, reducers, removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as keyof StateScheme];
            if (!mounted) {
                if (!store.getState()[name as keyof StateScheme]) {
                    store.reducerManager.add(name as keyof StateScheme, reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyof StateScheme);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };

        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
