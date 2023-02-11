import React from 'react';

export const AboutPageAsync = React.lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
    // @ts-expect-error
        resolve(import('./AboutPage'));
    }, 1500);
}));
