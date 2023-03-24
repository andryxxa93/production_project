import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(({
    className, label, options, onChange, value, readonly,
}: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options.map((option) => (
        <option value={option.value} key={option.value} className={cls.option}>{option.content}</option>
    )), [options]);

    const mods: Mods = {};
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select value={value} disabled={readonly} className={cls.select} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
});
