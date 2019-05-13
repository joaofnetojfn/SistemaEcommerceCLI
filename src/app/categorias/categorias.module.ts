import { CategoriasService } from './categoria.service';
import { FormsModule } from '@angular/forms';
import { categoriaRouting } from './categoria.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    categoriaRouting
  ],
  declarations: [CategoriaListComponent],
  providers:[CategoriasService]
})
export class CategoriasModule { }
