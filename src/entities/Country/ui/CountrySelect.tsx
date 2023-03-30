import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Countries } from '../model/types/Country';

interface CountrySelectProps {
    value?: string;
    onChange?: (value: Countries) => void;
    className?: string;
    readonly?: boolean;
}

const options = [
    { value: Countries.Armenia, content: Countries.Armenia },
    { value: Countries.Belarus, content: Countries.Belarus },
    { value: Countries.Canada, content: Countries.Canada },
    { value: Countries.Russia, content: Countries.Russia },
    { value: Countries.USA, content: Countries.USA },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries);
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
