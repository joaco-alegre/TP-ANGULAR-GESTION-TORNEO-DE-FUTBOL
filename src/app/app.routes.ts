import { Routes } from '@angular/router';
import { List } from './pages/equipo/equipo-list/list';
import { Details } from './pages/equipo/equipo-details/details';
import { Form } from './pages/equipo/equipo-form/form';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'es', component: Home},
    {path: 'en', component: Home},
    {path: 'equipos/:id', component: Details},
    {path: 'equipo/formulario', component:Form},
];
