import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
    title: 'ui/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
