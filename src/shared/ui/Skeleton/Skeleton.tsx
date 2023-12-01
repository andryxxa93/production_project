import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

export interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = memo(
    ({ className, width, height, border }: SkeletonProps) => {
        const styles: CSSProperties = {
            height,
            width,
            borderRadius: border,
        };

        return (
            <div
                style={styles}
                className={classNames(cls.Skeleton, {}, [className])}
            />
        );
    },
);
