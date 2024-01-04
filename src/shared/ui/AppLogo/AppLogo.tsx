import React, { memo } from 'react';
import AppSvg from 'production-project/src/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
    <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
    >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <AppSvg className={cls.appLogo} />
    </HStack>
));
