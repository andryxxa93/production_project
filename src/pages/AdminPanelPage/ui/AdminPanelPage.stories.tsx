import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from './AdminPanelPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AboutPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
