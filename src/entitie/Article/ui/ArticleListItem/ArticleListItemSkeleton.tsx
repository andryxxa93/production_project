import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleViewMode } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

export interface ArticleListItemSkeletonProps {
    className?: string;
    viewMode: ArticleViewMode;
}

export const ArticleListItemSkeleton = memo(({ className, viewMode }: ArticleListItemSkeletonProps) => {
    if (viewMode === ArticleViewMode.LIST) {
        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[viewMode]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={160} height={15} className={cls.username} />
                        <Skeleton width={160} height={15} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={250} width="100%" className={cls.textBlock} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[viewMode]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
