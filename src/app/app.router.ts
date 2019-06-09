import { LoginComponent } from './login/login/login.component';
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home/home.component'
import { AuthGuard } from './login/login-guard';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'clientes',
        loadChildren:'app/clientes/clientes.module#ClientesModule',
        canActivate:[AuthGuard]
    },
    {
        path:'categorias',
        loadChildren:'app/categorias/categorias.module#CategoriasModule',
        canActivate:[AuthGuard]
    },
    {
        path:'editoras',
        loadChildren:'app/editoras/editoras.module#EditorasModule',
        canActivate:[AuthGuard]
    }, 
    {
        path:'filmes',
        loadChildren:'app/filmes/filmes.module#FilmesModule',
        canActivate:[AuthGuard]
    },
    {
        path:'signin',
        component: LoginComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);