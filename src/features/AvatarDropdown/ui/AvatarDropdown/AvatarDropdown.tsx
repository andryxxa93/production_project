import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entitie/User';
import cls from './AvatarDropdown.module.scss';

export interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom left"
            items={
                [
                    ...(isAdmin || isManager ? [{
                        content: t('Админка'),
                        href: RoutePath.admin_panel,
                    }] : []),
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id,
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogout,
                    },
                ]
            }
            trigger={
                <Avatar size={30} imageUrl={authData.avatar} />
            }
        />
    );
});
