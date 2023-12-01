import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

export interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = memo(
    ({ className, notification }: NotificationItemProps) => {
        const content = (
            <Card
                theme={CardTheme.OUTLINED}
                className={classNames(cls.NotificationItem, {}, [className])}
            >
                <Text
                    text={notification.description}
                    title={notification.title}
                />
            </Card>
        );

        if (notification.href) {
            return (
                <a
                    href={notification.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cls.link}
                >
                    {content}
                </a>
            );
        }

        return content;
    },
);
