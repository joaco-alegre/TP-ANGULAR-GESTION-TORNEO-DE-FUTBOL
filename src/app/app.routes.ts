import { Routes } from '@angular/router';
import { EquipoList} from './pages/equipo/equipo-list/equipo-list';
import { EquipoDetails } from './pages/equipo/equipo-details/equipo-details';
import { EquipoForm } from './pages/equipo/equipo-form/equipo-form';
import { Home } from './pages/home/home';
import { TorneoList } from './pages/torneo/torneo-list/torneo-list';

export const routes: Routes = [
    {path: 'es', component: Home},
    {path: 'en', component: Home},
    {path: 'es/torneos', component: TorneoList},
    {path: 'es/torneos/:id', component: EquipoList},
    {path: 'equipos/:id', component: EquipoDetails},
    {path: 'equipo/formulario', component: EquipoForm},
    {path: ' ', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},
    //{path:' ', redirectTo: 'home'}
];
