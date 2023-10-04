import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSizes, ThemeButton } from './Button';

export default {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

Primary.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

Clear.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
};

ClearInverted.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

Outline.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSizes.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    size: ButtonSizes.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizes.XL,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    disabled: true,
};
