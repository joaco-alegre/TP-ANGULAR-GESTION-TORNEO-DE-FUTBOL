import { Routes } from '@angular/router';
import { EquipoList} from './pages/equipo/equipo-list/equipo-list';
import { EquipoDetails } from './pages/equipo/equipo-details/equipo-details';
import { EquipoForm } from './pages/equipo/equipo-form/equipo-form';
import { Home } from './pages/home/home';
import { TorneoList } from './pages/torneo/torneo-list/torneo-list';
import { TorneoDetails } from './pages/torneo/torneo-details/torneo-details';

export const routes: Routes = [
    {path: 'es', 
    component: Home,
    title: 'Inicio - Goal Manager'},
    {path: 'en', 
    component: Home,
     title: 'Home - Goal Manager'},
    {path: 'es/torneos', 
    component: TorneoList,
    title: 'Torneos - Goal Manager'},
    {path: 'es/torneos/:id',
    component: EquipoList,
    title: 'Equipos - Goal Manager'},
    {path: 'es/torneo/details/:id', component: TorneoDetails},
    {path: 'equipos/:id', component: EquipoDetails},
    {path: 'equipo/formulario', component: EquipoForm},
    {path: ' ', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},
    //{path:' ', redirectTo: 'home'}
];
