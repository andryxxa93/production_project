import { StateScheme } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScroll = (state: StateScheme) => state.scrollSaver.scroll;
export const getScrollSaverByPath = createSelector(
    getScroll,
    (state: StateScheme, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
