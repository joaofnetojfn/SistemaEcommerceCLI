import { FilterPipe } from './filme-list/filter.pipe';
import { FilmesService } from './filmes.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { filmesRouting } from './filmes.routing';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeCrudComponent } from './filme-crud/filme-crud.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    filmesRouting
  ],
  declarations: [FilmeListComponent, FilmeFormComponent, FilmeCrudComponent, FilterPipe],
  providers:[FilmesService]
})
export class FilmesModule { }
