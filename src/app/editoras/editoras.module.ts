import { FilterPipe } from './editora-list/filter.pipe';
import { EditorasService } from './editoras.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraListComponent } from './editora-list/editora-list.component';
import { editorasRouting } from './editoras.routing';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { EditoraCrudComponent } from './editora-crud/editora-crud.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    editorasRouting
  ],
  declarations: [EditoraListComponent, EditoraFormComponent, EditoraCrudComponent, FilterPipe],
  providers: [EditorasService]
})
export class EditorasModule { }
