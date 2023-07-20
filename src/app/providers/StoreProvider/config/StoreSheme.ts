import { UserSchema } from 'entitie/User';
import { LoginScheme } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entitie/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entitie/Article';
import {
    ArticleDetailsPageScheme,
    ArticlesDetailsCommentsScheme,
    ArticlesDetailsRecommendationsScheme,
} from 'pages/ArticlesDetailsPage';
import { AddCommentFormScheme } from 'features/AddNewCommentForm';
import { ArticlePageScheme } from 'pages/ArticlesPage';
import { ScrollSaverScheme } from 'features/ScrollSaver';

export interface StateScheme {
    user: UserSchema,
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlesPage?: ArticlePageScheme;
    scrollSaver: ScrollSaverScheme;
    articleDetailsPage?: ArticleDetailsPageScheme;
}

export type MountedReducers = OptionalRecord<keyof StateScheme, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: keyof StateScheme, reducer: Reducer) => void;
    remove: (key: keyof StateScheme) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
