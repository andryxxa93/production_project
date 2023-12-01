import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select option',
    options: [
        {
            value: '1',
            content: 'first',
        },
        {
            value: '2',
            content: 'second',
        },
        {
            value: '3',
            content: 'third',
        },
    ],
};

export const Secondary = Template.bind({});
Secondary.args = {};
