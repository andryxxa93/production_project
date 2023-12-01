import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChangeInputHandler = (value: string) => setValue(value);

    return <Page data-testid="MainPage">{t('Главная страница')}</Page>;
}

export default MainPage;
