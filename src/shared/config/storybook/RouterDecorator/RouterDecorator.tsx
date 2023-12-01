import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComp: Story) => (
    <BrowserRouter>
        <StoryComp />
    </BrowserRouter>
);
