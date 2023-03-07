import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: { authData: { username: '123', id: '1' } },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: { username: '123', id: '1' } },
    }),
];

export const DarkWithoutAuthData = Template.bind({});
DarkWithoutAuthData.args = {};

DarkWithoutAuthData.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: undefined },
    }),
];

export const LightWithoutAuthData = Template.bind({});
LightWithoutAuthData.args = {};

LightWithoutAuthData.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: { authData: undefined },
    }),
];
