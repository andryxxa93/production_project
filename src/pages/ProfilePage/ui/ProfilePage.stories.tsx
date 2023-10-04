import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CURRENCY } from '@/entitie/Currency';
import { COUNTRY } from '@/entitie/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Андрей',
                lastname: 'Гордиенко',
                age: 30,
                currency: CURRENCY.EUR,
                country: COUNTRY.RUSSIA,
                city: 'Moscow',
                username: 'admin',
                avatar: 'https://static7.tgcnt.ru/posts/_0/95/95b965a38d28100849bcc1f2fe78d992.jpg',
            },
        },
    }),
];

export const Secondary = Template.bind({});
Secondary.args = {};

Secondary.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Андрей',
                lastname: 'Гордиенко',
                age: 30,
                currency: CURRENCY.EUR,
                country: COUNTRY.RUSSIA,
                city: 'Moscow',
                username: 'admin',
                avatar: 'https://static7.tgcnt.ru/posts/_0/95/95b965a38d28100849bcc1f2fe78d992.jpg',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];
