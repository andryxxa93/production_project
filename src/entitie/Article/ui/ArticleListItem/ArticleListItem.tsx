import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleViewMode,
} from '../../model/types/article';

export interface ArticleItemProps {
    className?: string;
    article: Article;
    viewMode: ArticleViewMode;
}

export const ArticleListItem = memo(({ className, article, viewMode }: ArticleItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const image = <img src={article.img} alt={article.title} className={cls.img} />;

    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

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
                        <Button onClick={onOpenArticle}>
                            {t('Читать далее')}
                            ...
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[viewMode]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
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
        </div>
    );
});
