import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
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

export const Country = memo(({
    value, onChange, readonly, className,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as COUNTRY);
    }, [onChange]);

    return (
        <Select
            className={className}
            options={options}
            label={t('Укажите страну')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
