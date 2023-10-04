import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';

export const getScroll = (state: StateScheme) => state.scrollSaver.scroll;
export const getScrollSaverByPath = createSelector(
    getScroll,
    (state: StateScheme, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
