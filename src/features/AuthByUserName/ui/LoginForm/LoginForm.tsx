/* eslint-disable i18next/no-literal-string */
import { loginActions, loginReducer } from 'features/AuthByUserName/model/Slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLofinPassword/getLoginPassword';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
className?: string;
onSucces: () => void;
}

const initialreducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSucces }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSucces();
        }
    }, [dispatch, password, username, onSucces]);

    return (
        <DynamicModuleLoader
            reducer={initialreducers}
            removeReducer
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизаци')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    value={username}
                    onChange={onChangeUserName}
                    autoFocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                />
                <Button
                    onClick={onLogin}
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
