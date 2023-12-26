import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useJsonSettings, saveJsonSettings } from '@/entitie/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const { isArticleWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticleWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticleWasOpened: true }));
        }
    }, [dispatch, isArticleWasOpened]);

    const onClose = () => setIsOpen(false);

    return (
        <Modal isLazy isOpen={isOpen} onClose={onClose}>
            <Text
                title={t('Добро пожаловать')}
                text={t(
                    'Здесь вы можете искать и просматривать статьи на различные темы',
                )}
            />
        </Modal>
    );
});
