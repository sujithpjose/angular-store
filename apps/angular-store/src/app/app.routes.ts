import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'products',
        loadComponent: () =>
            import('@angular-monorepo/products').then((m) => m.ProductsComponent),
    },
    {
        path: 'orders',
        loadComponent: () =>
            import('@angular-monorepo/orders').then((m) => m.OrdersComponent),
    },
];
