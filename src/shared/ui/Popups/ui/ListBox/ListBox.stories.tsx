import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'ui/ListBo',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            content: 'first',
            value: 'first',
        },
    ],
};

export const TopLeft = Template.bind({});
Primary.args = {
    direction: 'top left',
    value: '123',
    items: [
        {
            content: 'first',
            value: 'first',
        },
    ],
};

export const TopRight = Template.bind({});
Primary.args = {
    direction: 'top right',
    value: '123',
    items: [
        {
            content: 'first',
            value: 'first',
        },
    ],
};

export const BottomLeft = Template.bind({});
Primary.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        {
            content: 'first',
            value: 'first',
        },
    ],
};

export const BottomRight = Template.bind({});
Primary.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        {
            content: 'first',
            value: 'first',
        },
    ],
};
