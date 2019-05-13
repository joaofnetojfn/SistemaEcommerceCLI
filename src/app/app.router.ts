import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home/home.component'

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
        loadChildren:'app/clientes/clientes.module#ClientesModule'
    },
    {
        path:'categorias',
        loadChildren:'app/categorias/categorias.module#CategoriasModule'
    },
    {
        path:'editoras',
        loadChildren:'app/editoras/editoras.module#EditorasModule'
    }, 
    {
        path:'filmes',
        loadChildren:'app/filmes/filmes.module#FilmesModule'
    }
];
export const RoutingModule = RouterModule.forRoot(routes);