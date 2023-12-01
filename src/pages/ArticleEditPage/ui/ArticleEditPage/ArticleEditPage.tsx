import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Редактировать') : t('Создать')}
        </div>
    );
});

export default ArticleEditPage;
