import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { Routes, RouterModule } from '@angular/router';


const CLIENTES_ROUTES: Routes = [
    {
        path: '',
        component: ClienteCrudComponent
    },
    {
        path: ':id', component: ClienteCrudComponent
    }
];
export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);