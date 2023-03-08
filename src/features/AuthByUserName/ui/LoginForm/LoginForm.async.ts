import React, { FC } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(async () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./LoginForm'));
    }, 1500);
}));
