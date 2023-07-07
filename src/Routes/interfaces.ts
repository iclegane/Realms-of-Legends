import { FC, LazyExoticComponent } from 'react';

export enum RoutesPaths {
    main = '/',
    game = '/game',
}

export interface Route {
    route: string;
    component: LazyExoticComponent<FC>;
}
