import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entitie/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

export interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button onClick={onEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button onClick={onCancelEdit} className={cls.editBtn} theme={ThemeButton.OUTLINE_RED}>
                        {t('Отменить')}
                    </Button>
                    <Button onClick={onSave} className={cls.saveBtn} theme={ThemeButton.OUTLINE}>
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
