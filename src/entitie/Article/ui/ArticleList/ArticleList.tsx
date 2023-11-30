import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewMode } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
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
    const renderArticle = (article: Article) => (
        <ArticleListItem target={target} viewMode={viewMode} article={article} className={cls.card} key={article.id} />
    );

    return (
        <div
            data-testid="ArticleList"
            className={classNames(cls.ArticleList, {}, [className, cls[viewMode]])}
        >
            {
                articles.length
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
});
