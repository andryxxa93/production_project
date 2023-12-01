import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo(
    ({
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    }: TextProps) => {
        const mods: Mods = {
            [cls[theme]]: true,
            [cls[align]]: true,
            [cls[size]]: true,
        };

        const HeaderTag = mapSizeToHeaderTag[size];

        return (
            <div className={classNames(cls.Text, mods, [className])}>
                {title && (
                    <HeaderTag
                        data-testid={`${dataTestId}.Header`}
                        className={cls.title}
                    >
                        {title}
                    </HeaderTag>
                )}
                {text && (
                    <p
                        className={cls.text}
                        data-testid={`${dataTestId}.Paragraph`}
                    >
                        {text}
                    </p>
                )}
            </div>
        );
    },
);
