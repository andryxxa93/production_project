import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/AddNewCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage';
import { profileReducer } from '@/features/editableProfileCard';
import { loginReducer } from '@/features/AuthByUserName';
import { articleDetailsReducer } from '@/entitie/Article';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
