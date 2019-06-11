import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './../categorias.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoriaService: CategoriasService) { }
  categorias: Categoria[] = [];
  criterio: String;
  ngOnInit() {
    this.categoriaService.getAll().subscribe(data => this.categorias = data, err => {
      alert('Aconteceu um erro!');
    });
    this.categoriaService.categoriasChanged.subscribe(
      (observable: any) => observable.subscribe( data =>this.categorias = data )
    );
  }

}
