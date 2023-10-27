import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entitie/User';
import { LoginScheme } from '@/features/AuthByUserName';
import { ArticleDetailsScheme } from '@/entitie/Article';
import {
    ArticleDetailsPageScheme,
} from '@/pages/ArticlesDetailsPage';
import { AddCommentFormScheme } from '@/features/AddNewCommentForm';
import { ArticlePageScheme } from '@/pages/ArticlesPage';
import { ScrollSaverScheme } from '@/features/ScrollSaver';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileScheme } from '@/features/editableProfileCard';

export interface StateScheme {
    user: UserSchema,
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlesPage?: ArticlePageScheme;
    scrollSaver: ScrollSaverScheme;
    articleDetailsPage?: ArticleDetailsPageScheme;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
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
