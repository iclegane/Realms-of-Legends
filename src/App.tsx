import React, { FC, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { routes } from 'src/Routes';
import ErrorBoundary from 'src/core/ErrorBoundary';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        {routes.map(({ route, component }) => (
                            <Route key={route} element={React.createElement(component as FC)} path={route} />
                        ))}
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App;
