import React from 'react';

export const MainPageAsync = React.lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
    // @ts-expect-error
        resolve(import('./MainPage'));
    }, 1500);
}));
