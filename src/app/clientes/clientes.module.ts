import { FilterPipe } from './cliente-list/filter.pipe';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { clientesRouting } from './clientes.routing';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteCrudComponent } from './cliente-crud/cliente-crud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    clientesRouting
  ],
  declarations: [ClienteListComponent, ClienteFormComponent, ClienteCrudComponent,FilterPipe],
  providers:[ClientesService]
})
export class ClientesModule { }
