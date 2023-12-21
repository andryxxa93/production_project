import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entitie/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticlesDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleRating } from '@/features/ArticleRating';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

export interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isArticleCommentsEnabled = getFeatureFlag('isArticleCommentEnabled');

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticlesDetailsPage, {}, [className])}
            >
                {t('Страница не найдена')}
            </Page>
        );
    }

    const comments = toggleFeatures({
        name: 'isArticleCommentEnabled',
        off: () => null,
        on: () => <ArticleDetailsComments id={id} />,
    });

    const articleRating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        off: () => null,
        on: () => <ArticleRating articleId={id} />,
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticlesDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {articleRating}
                    <ArticleRecommendationsList />
                    {comments}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
