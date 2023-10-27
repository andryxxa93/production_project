import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'ui/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    isOpen: true,
};

Primary.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    isOpen: true,
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
