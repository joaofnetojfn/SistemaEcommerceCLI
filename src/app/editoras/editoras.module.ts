import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraListComponent } from './editora-list/editora-list.component';
import { editorasRouting } from './editoras.routing';
import { FormsModule } from '@angular/forms';
import { EditorasService } from './editoras.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    editorasRouting
  ],
  declarations: [EditoraListComponent],
  providers: [EditorasService]
})
export class EditorasModule { }
