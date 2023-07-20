import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from 'entitie/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entitie/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleViewMode } from '../../model/types/article';
import cls from './ArticleList.module.scss';

export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    viewMode?: ArticleViewMode;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (viewMode: ArticleViewMode) => new Array(viewMode === ArticleViewMode.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} viewMode={viewMode} key={index} />
    ));

export const ArticleList = memo(({
    className, articles, viewMode = ArticleViewMode.BLOCK, isLoading, target,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem target={target} viewMode={viewMode} article={article} className={cls.card} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[viewMode]])}>
            {
                articles.length
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
});
