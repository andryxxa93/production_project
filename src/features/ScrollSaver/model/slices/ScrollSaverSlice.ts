import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaverScheme } from '../types/ScrollSaverScheme';

const initialState: ScrollSaverScheme = {
    scroll: {},
};

export const scrollSaverSlice = createSlice({
    name: 'scrollSaver',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollActions } = scrollSaverSlice;
export const { reducer: scrollReducer } = scrollSaverSlice;
