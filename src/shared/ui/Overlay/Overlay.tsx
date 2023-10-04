import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

export interface OverlayProps {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export const Overlay = memo(({ className, children, onClick }: OverlayProps) => (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}>
        {children}
    </div>
));
