import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'ui/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text text="test" title="test title" />,
};