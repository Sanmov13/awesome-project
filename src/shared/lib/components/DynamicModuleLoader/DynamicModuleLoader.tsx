/* eslint-disable react/jsx-no-useless-fragment */
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    children: any;
    reducer: ReducersList;
    removeReducer?: boolean;
}

export const DynamicModuleLoader = ({
    children, reducer, removeReducer,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducer).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeReducer) {
                Object.entries(reducer).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            { children }
        </>
    );
};
