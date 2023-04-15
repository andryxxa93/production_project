import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entitie/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from 'widgets/Sidebar/model/types/Sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.article,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return SidebarItemsList;
    },

);
