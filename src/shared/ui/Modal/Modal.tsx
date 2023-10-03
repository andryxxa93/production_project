import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    isLazy?: boolean,
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className, children, isOpen, onClose, isLazy,
}: ModalProps) => {
    const { onCloseHandler, isClosing, isMounted } = useModal({ animatedDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (isLazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={onCloseHandler} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
