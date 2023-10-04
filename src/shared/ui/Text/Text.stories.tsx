import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'ui/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Text',
    title: 'Title',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text: 'Text',
    title: 'Title',
};

PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};

OnlyTitleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text',
};

OnlyTextDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Text',
    title: 'Title',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    text: 'Text',
    title: 'Title',
    size: TextSize.M,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    text: 'Text',
    title: 'Title',
    size: TextSize.XL,
};
