import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18n';

interface componentRenderOptions {
   route?: string
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Suspense fallback="">
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </Suspense>
        </MemoryRouter>,
    );
}
