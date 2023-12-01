// eslint-disable-next-line path-fixer/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (StoryComp: Story) => (
    <div className="app">
        <StoryComp />
    </div>
);
