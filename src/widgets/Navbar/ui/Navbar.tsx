/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuth, setIsAuth] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuth((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuth} onClose={onToggleModal}>
                lorem nrjfrnrjf nfrjfrnfr rfrjfrnrjnr rfjrnfrjfnrfjrnf rjfrnfjrnfrjnf rfrnfrjnfrjfr rfrjfnrjfnrf rnfrjfnrjfrnflorem nrjfrnrjf nfrjfrnfr rfrjfrnrjnr rfjrnfrjfnrfjrnf rjfrnfjrnfrjnf rfrnfrjnfrjfr rfrjfnrjfnrf rnfrjfnrjfrnf
            </Modal>
        </div>
    );
};
