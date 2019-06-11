import { FilmeCrudComponent } from './filme-crud/filme-crud.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FilmeFormComponent } from './filme-form/filme-form.component';

const FILMES_ROUTES: Routes = [
    {
        path: '',
        component: FilmeCrudComponent
    },
    {
        path: ':id', component: FilmeCrudComponent
    }
];
export const filmesRouting = RouterModule.forChild(FILMES_ROUTES);