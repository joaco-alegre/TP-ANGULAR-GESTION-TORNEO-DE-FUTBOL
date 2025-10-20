import { Routes } from '@angular/router';
import { List } from './pages/equipo/equipo-list/list';
import { Details } from './pages/equipo/equipo-details/details';
import { Form } from './pages/equipo/equipo-form/form';

export const routes: Routes = [
    {path:'', component: List},
    {path: 'equipos/:id', component: Details},
    {path: 'equipo/formulario', component:Form},
];
