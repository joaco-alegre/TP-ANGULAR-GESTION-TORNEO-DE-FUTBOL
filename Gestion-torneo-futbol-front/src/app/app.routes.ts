import { Routes } from '@angular/router';
import { EquipoList} from './pages/equipo/equipo-list/equipo-list';
import { EquipoDetails } from './pages/equipo/equipo-details/equipo-details';
import { EquipoForm } from './pages/equipo/equipo-form/equipo-form';
import { Home } from './pages/home/home';
import { TorneoList } from './pages/torneo/torneo-list/torneo-list';
import { TorneoDetails } from './pages/torneo/torneo-details/torneo-details';
import { JugadorList } from './pages/jugador/jugador-list/jugador-list';
import { JugadorDetails } from './pages/jugador/jugador-details/jugador-details';
import { UsuarioForm } from './pages/usuario/usuario-form/usuario-form';
import { UsuarioHome } from './pages/usuario/usuario-home/usuario-home';
import { UsuarioLogin } from './pages/usuario/usuario-login/usuario-login';

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
    {path: 'es/equipos/:id', component: JugadorList},
    {path: 'es/jugadores/:id', component: JugadorDetails},
    {path: 'equipos/:id', component: EquipoDetails},
    {path: 'equipo/formulario', component: EquipoForm},
    {path: ' ', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},
    {path: 'es/inicio-sesion', component: UsuarioLogin},
    {path: 'es/usuario-home', component: UsuarioHome},
    {path:' ', redirectTo: 'home'}
];
