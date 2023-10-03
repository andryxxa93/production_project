import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entitie/Notification';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMobile();

    const onDrawerOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onDrawerClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onDrawerOpen} theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            {!isMobile && (
                <Popover
                    trigger={trigger}
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [className])}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}
            {isMobile && (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onDrawerClose}>
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </>

    );
});
