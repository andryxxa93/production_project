import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

export interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        if (isLoading) {
            return (
                <div
                    data-testid="CommentCard.Loading"
                    className={classNames(cls.CommentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={100}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton className={cls.text} width="100%" height={50} />
                </div>
            );
        }

        if (!comment) return null;

        return (
            <VStack
                data-testid="CommentCard.Content"
                gap="16"
                max
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <AppLink
                    to={getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    <Avatar size={30} imageUrl={comment?.user?.avatar} />
                    <Text
                        className={cls.username}
                        size={TextSize.L}
                        text={comment?.user?.username}
                    />
                </AppLink>
                <Text text={comment.text} />
            </VStack>
        );
    },
);
