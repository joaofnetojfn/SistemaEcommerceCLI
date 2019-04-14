import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { Routes, RouterModule } from '@angular/router';


const CLIENTES_ROUTES: Routes = [
    {
        path: '',
        component: ClienteListComponent
    }
];
export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);