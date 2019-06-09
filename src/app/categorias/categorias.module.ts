import { FilterPipe } from './../clientes/cliente-list/filter.pipe';
import { CategoriasService } from './categorias.service';
import { FormsModule } from '@angular/forms';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { categoriaRouting } from './categoria.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaCrudComponent } from './categoria-crud/categoria-crud.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    categoriaRouting
  ],
  declarations: [CategoriaListComponent, CategoriaFormComponent,CategoriaCrudComponent, FilterPipe],
  providers:[CategoriasService]
})
export class CategoriasModule { }
