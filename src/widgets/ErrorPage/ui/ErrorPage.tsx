import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

export interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const pageReloadHandler = () => location.reload();

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button onClick={pageReloadHandler}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
