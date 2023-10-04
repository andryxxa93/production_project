import { Link, type LinkProps } from 'react-router-dom';
import { type FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                { [cls[theme]]: true },
                [className, cls[theme]],
            )}
            {...restProps}
        >
            {children}
        </Link>
    );
});
