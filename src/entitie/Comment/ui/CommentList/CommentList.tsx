import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

export interface CommentLIstProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(
    ({ className, comments, isLoading }: CommentLIstProps) => {
        const { t } = useTranslation('article');

        if (isLoading) {
            return (
                <VStack
                    gap="16"
                    max
                    className={classNames('', {}, [className])}
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))
                ) : (
                    <Text text={t('Комментарии отсутствуют')} />
                )}
            </VStack>
        );
    },
);
