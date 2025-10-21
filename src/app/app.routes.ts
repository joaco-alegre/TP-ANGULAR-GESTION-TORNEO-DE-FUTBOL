import { Routes } from '@angular/router';
import { EquipoList} from './pages/equipo/equipo-list/equipo-list';
import { Details } from './pages/equipo/equipo-details/details';
import { Form } from './pages/equipo/equipo-form/form';
import { Home } from './pages/home/home';
import { TorneoList } from './pages/torneo/torneo-list/torneo-list';

export const routes: Routes = [
    {path:'es', component: Home},
    {path: 'en', component: Home},
    {path: 'es/torneos', component: TorneoList},
    {path: 'es/torneos/:id', component: EquipoList},
    {path: 'equipos/:id', component: Details},
    {path: 'equipo/formulario', component:Form},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];
