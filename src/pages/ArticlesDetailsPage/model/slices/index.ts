import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from '../types/index';
import { articleDetailsCommentsReducer } from '../../model/slices/ArticleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../../model/slices/ArticleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>(
    {
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    },
);
