import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

export default {
    title: 'ui/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
