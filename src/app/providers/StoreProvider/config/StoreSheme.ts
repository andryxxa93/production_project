import { UserSchema } from 'entitie/User';
import { LoginScheme } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileScheme } from 'entitie/Profile';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router-dom';
import { ArticleDetailsScheme } from 'entitie/Article';
import { ArticlesDetailsCommentsScheme } from 'pages/ArticlesDetailsPage';
import { AddCommentFormScheme } from 'features/AddNewCommentForm';
import { ArticlePageScheme } from 'pages/ArticlesPage';

export interface StateScheme {
    user: UserSchema,
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    articleDetailsComments?: ArticlesDetailsCommentsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlesPage?: ArticlePageScheme;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>;
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
    add: (key: keyof StateScheme, reducer: Reducer) => void;
    remove: (key: keyof StateScheme) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
