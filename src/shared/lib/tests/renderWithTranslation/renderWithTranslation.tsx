import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <Suspense fallback="">
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </Suspense>,
    );
}
