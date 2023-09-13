import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entitie/Article';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slices/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageViewMode,
} from '../../model/selectors/articlesPageSelectors';

export interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const viewMode = useSelector(getArticlesPageViewMode);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);
    const articles = useSelector(getArticles.selectAll);

    if (error) {
        return <Text text={t('Ошибка при загрузке данных')} />;
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            viewMode={viewMode}
            articles={articles}
        />
    );
});
