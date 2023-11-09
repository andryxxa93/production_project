import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { CURRENCY } from '../../model/types/currency';

export interface CurrencySelectProps {
    className?: string;
    value?: CURRENCY;
    onChange?: (value: CURRENCY) => void;
    readonly?: boolean;
}

const options = [
    { value: CURRENCY.RUB, content: CURRENCY.RUB },
    { value: CURRENCY.EUR, content: CURRENCY.EUR },
    { value: CURRENCY.USD, content: CURRENCY.USD },
];

export const CurrencySelect = memo(({
    value, onChange, readonly, className,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CURRENCY);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            label={t('Укажите валюту')}
            defaultValue={t('Укажите валюту')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={className}
    //         options={options}
    //         label={t('Укажите валюту')}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
