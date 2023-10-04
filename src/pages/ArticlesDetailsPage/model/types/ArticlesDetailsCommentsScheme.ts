import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entitie/Comment';

export interface ArticlesDetailsCommentsScheme extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
