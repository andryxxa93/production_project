import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    content: string;
}

export interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, onChange, value, readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};
