import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from 'entitie/Article';
import { UserRole } from 'entitie/User/model/types/user';
import withMock from 'storybook-addon-mock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'username',
        roles: [UserRole.ADMIN],
        avatar: '1',
    },
    title: 'title',
    img: 'img',
    type: [ArticleType.ALL],
    createdAt: '12.02.21',
    views: 100,
    subtitle: 'subtitle',
    blocks: [],
};

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
