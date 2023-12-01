import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    imageUrl:
        'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    size: 150,
};

export const Secondary = Template.bind({});
Secondary.args = {
    imageUrl:
        'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    size: 100,
};

export const WithoutAvatar = Template.bind({});
WithoutAvatar.args = {
    size: 100,
};
