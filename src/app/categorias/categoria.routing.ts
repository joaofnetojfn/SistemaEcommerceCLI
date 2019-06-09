import { CategoriaCrudComponent } from './categoria-crud/categoria-crud.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { Routes, RouterModule } from '@angular/router';

const CATEGORIA_ROUTES: Routes = [
    {
        path: '',
        component: CategoriaCrudComponent
    },
    {
        path: ':id', 
        component: CategoriaCrudComponent
    }
];
export const categoriaRouting = RouterModule.forChild(CATEGORIA_ROUTES);