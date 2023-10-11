import { useTranslation } from 'react-i18next';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo(({
    className, children, theme = CardTheme.NORMAL, max, ...otherProps
}: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
