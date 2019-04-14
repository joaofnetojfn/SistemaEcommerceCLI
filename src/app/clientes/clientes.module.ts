import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { clientesRouting } from './clientes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    clientesRouting
  ],
  declarations: [ClienteListComponent],
  providers:[ClientesService]
})
export class ClientesModule { }
