import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TypeComponent } from './pages/type/type.component';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'type',
        component: TypeComponent
    },
    {
        path: 'list/:id',
        component: ListComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    },
];
