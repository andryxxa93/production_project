import React, { FC } from 'react';
import { AddCommentFormProps } from 'features/AddNewCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = React.lazy<FC<AddCommentFormProps>>(async () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./AddCommentForm'));
    }, 1500);
}));
