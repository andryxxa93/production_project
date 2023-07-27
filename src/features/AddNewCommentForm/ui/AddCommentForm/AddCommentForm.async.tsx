import React, { FC } from 'react';
import { AddCommentFormProps } from 'features/AddNewCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = React.lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
