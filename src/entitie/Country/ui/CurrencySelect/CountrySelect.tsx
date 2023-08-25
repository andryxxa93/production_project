import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { COUNTRY } from '../../model/types/country';

export interface CountrySelectProps {
    className?: string;
    value?: COUNTRY;
    onChange?: (value: COUNTRY) => void;
    readonly?: boolean;
}

const options = [
    { value: COUNTRY.USA, content: COUNTRY.USA },
    { value: COUNTRY.ENGLAND, content: COUNTRY.ENGLAND },
    { value: COUNTRY.RUSSIA, content: COUNTRY.RUSSIA },
];

export const CountrySelect = memo(({
    value, onChange, readonly, className,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as COUNTRY);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );
});
