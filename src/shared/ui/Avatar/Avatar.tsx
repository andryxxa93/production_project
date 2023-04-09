import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

export interface AvatarProps {
    className?: string;
    imageUrl?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, imageUrl = 'https://vsegda-pomnim.com/uploads/posts/2022-04/thumbs/1649232741_8-vsegda-pomnim-com-p-pustoe-litso-foto-10.jpg', size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({ width: size || 100, height: size || 100 }), [size]);

    return (
        <img
            src={imageUrl}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
