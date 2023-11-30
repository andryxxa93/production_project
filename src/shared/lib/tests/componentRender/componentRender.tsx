import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line path-fixer/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export interface renderWithRouterOptions {
    route?: string,
    initialState?: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
    theme?: Theme,

}

interface TestProvider {
    children: ReactNode;
    options?: renderWithRouterOptions;
}

export function TestsProvider(props: TestProvider) {
    const {
        options = {},
        children,
    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.DARK,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: renderWithRouterOptions = {}) {
    return render(
        <TestsProvider options={options}>{component}</TestsProvider>,
    );
}
