import { FilmeListComponent } from './filme-list/filme-list.component';
import { Routes, RouterModule } from '@angular/router';

const FILMES_ROUTES: Routes = [
    {
        path: '',
        component: FilmeListComponent
    }
];
export const filmesRouting = RouterModule.forChild(FILMES_ROUTES);