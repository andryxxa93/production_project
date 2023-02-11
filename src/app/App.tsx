import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback="">
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
