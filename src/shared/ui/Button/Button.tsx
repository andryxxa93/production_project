import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizes {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    square?: boolean,
    size?: ButtonSizes,
    theme?: ThemeButton,
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        square,
        size = ButtonSizes.M,
        theme = ThemeButton.OUTLINE,
        disabled,
        ...restProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
});
