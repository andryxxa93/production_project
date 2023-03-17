import React from 'react';

export const ProfilePageAsync = React.lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ProfilePage'));
    }, 1500);
}));
