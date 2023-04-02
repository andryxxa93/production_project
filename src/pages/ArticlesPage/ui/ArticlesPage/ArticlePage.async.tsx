import React from 'react';

export const ArticlesPageAsync = React.lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
    // @ts-expect-error
        resolve(import('./ArticlesPage'));
    }, 1500);
}));
