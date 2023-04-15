import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'entitie/Comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentLIst.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

export interface CommentLIstProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentLIstProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentLIst, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentLIst, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => <CommentCard className={cls.comment} key={comment.id} comment={comment} />)
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
