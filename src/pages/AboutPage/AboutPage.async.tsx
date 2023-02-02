import React from "react";

export const AboutPageAsync = React.lazy(() =>  new Promise(resolve => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./AboutPage'));
    }, 1500)
}));
