import React, { FC } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
