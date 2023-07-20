import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entitie/Article';

export interface ArticlesDetailsRecommendationsScheme extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
