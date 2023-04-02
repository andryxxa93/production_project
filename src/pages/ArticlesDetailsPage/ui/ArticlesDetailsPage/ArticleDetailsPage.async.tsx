import React from 'react';

export const ArticleDetailsPageAsync = React.lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
    // @ts-expect-error
        resolve(import('./ArticlesDetailsPage'));
    }, 1500);
}));
