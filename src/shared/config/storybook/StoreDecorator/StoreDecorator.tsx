import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/AddNewCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { articleDetailsReducer } from '@/entitie/Article/testing';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateScheme>, asyncReducers?: ReducerList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
