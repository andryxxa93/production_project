import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComp: Story) => (
    <Suspense>
        <StoryComp />
    </Suspense>
);
