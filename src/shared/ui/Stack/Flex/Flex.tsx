import { memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
import { TestProps } from '@/shared/types/test';

export type FlexJustify = 'between' | 'center' | 'start' | 'end';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps extends TestProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = memo(
    ({
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap,
        max,
        ...other
    }: FlexProps) => {
        const classes = [
            className,
            justifyClasses[justify],
            alignClasses[align],
            directionClasses[direction],
            gap && gapClasses[gap],
        ];

        const mods: Mods = {
            [cls.max]: max,
        };

        return (
            <div className={classNames(cls.Flex, mods, classes)} {...other}>
                {children}
            </div>
        );
    },
);
