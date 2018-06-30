import { Route } from '@angular/router';
import { AnonymousUserGuard } from './core/guards/anonymous-user-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ AnonymousUserGuard ]
    },
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        component: DashboardComponent
    }
];
