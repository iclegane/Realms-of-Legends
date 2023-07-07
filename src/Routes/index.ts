import React from 'react';

import { Route, RoutesPaths } from 'src/Routes/interfaces';

export const routes: Route[] = [
    {
        route: RoutesPaths.main,
        component: React.lazy(() => import('../Pages/Greeting')),
    },
    {
        route: RoutesPaths.game,
        component: React.lazy(() => import('../Pages/Game')),
    },
];
