import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleCreatePage.module.scss';

export interface ArticleCreatePageProps {
    className?: string
}

export const ArticleCreatePage = memo(({ className }: ArticleCreatePageProps) => {
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleCreatePage, {}, [className])}>
            ArticleCreatePage
        </div>
    );
});
