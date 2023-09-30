import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entitie/Notification';
import cls from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
    <Popover
        trigger={(
            <Button theme={ThemeButton.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
        direction="bottom left"
        className={classNames(cls.NotificationButton, {}, [className])}
    >
        <NotificationList className={cls.notifications} />
    </Popover>
));
