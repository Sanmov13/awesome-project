import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?:boolean;
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>
                {t(short ? 'Короткий язык' : 'Русский')}
            </Button>
        </div>
    );
};
