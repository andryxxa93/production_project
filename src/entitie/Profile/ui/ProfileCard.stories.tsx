import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { COUNTRY } from '@/entitie/Country';
import { CURRENCY } from '@/entitie/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Андрей',
        lastname: 'Гордиенко',
        age: 30,
        currency: CURRENCY.EUR,
        country: COUNTRY.RUSSIA,
        city: 'Moscow',
        username: 'admin',
        avatar: 'https://static7.tgcnt.ru/posts/_0/95/95b965a38d28100849bcc1f2fe78d992.jpg',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
