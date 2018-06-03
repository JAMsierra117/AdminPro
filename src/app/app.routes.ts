import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NpfComponent } from './shared/npf/npf.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NpfComponent},
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
