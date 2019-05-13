import { FilmesService } from './filmes.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { filmesRouting } from './filmes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    filmesRouting
  ],
  declarations: [FilmeListComponent],
  providers:[FilmesService]
})
export class FilmesModule { }
