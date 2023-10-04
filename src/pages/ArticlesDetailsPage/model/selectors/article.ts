import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entitie/User';
import { getArticleDetailsData } from '@/entitie/Article';

export const getCanUserEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) return false;
        return user.id === article.user.id;
    },
);
