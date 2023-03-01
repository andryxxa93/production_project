import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChangeInputHandler = (value: string) => setValue(value);

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
