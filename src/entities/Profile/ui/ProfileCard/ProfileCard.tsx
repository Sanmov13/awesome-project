/* eslint-disable i18next/no-literal-string */
import { CountrySelect } from 'entities/Country';
import { Countries } from 'entities/Country/model/types/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    error?: string;
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Countries) => void
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>

        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Something went wrong')}
                    text={t('Try to refresh page')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.LEFT}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {
                    data?.avatar
                && (
                    <div className={cls.avatrWrapper}>

                        <Avatar size={150} src={data?.avatar} alt="surt" />
                    </div>
                )
                }
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Your name')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Your age')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Your city')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Your avatar')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Your useraname')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
