import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleViewMode } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';

export interface ArticleItemProps {
    className?: string;
    article: Article;
    viewMode: ArticleViewMode;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
    className, article, viewMode, target,
}: ArticleItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const types = <Text text={article?.type?.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const image = <img src={article.img} alt={article.title} className={cls.img} />;

    const textBlock = article?.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    if (viewMode === ArticleViewMode.LIST) {
        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[viewMode]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar imageUrl={article.user.avatar} size={30} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    {types}
                    {image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button>
                                {t('Читать далее')}
                                ...
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleItem, {}, [className, cls[viewMode]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Text text={article.createdAt} className={cls.date} />
                    {image}
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
