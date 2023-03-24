import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from './Country';

export default {
    title: 'entities/Country',
    component: Country,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Country>;

const Template: ComponentStory<typeof Country> = (args) => <Country {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
