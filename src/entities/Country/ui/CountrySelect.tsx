import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/Country';

interface CountrySelectProps {
    value?: string;
    onChange?: (value: Country) => void;
    className?: string;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Canada, content: Country.Canada },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label="Укажите страну"
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
