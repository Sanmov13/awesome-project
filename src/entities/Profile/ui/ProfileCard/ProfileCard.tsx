import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    onChangeCity: (value?: string) => void
    onChangeAge: (value?: string) => void
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

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
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
            </div>
        </div>
    );
};
