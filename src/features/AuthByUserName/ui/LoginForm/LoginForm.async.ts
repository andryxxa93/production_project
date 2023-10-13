import React, { FC } from 'react';
import { LoginFormProps } from '../LoginForm/LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
