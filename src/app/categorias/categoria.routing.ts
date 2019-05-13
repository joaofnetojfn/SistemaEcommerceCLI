import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { Routes, RouterModule } from '@angular/router';


const CATEGORIA_ROUTES: Routes = [
    {
        path: '',
        component: CategoriaListComponent
    }
];
export const categoriaRouting = RouterModule.forChild(CATEGORIA_ROUTES);