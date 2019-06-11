import { FilmesService } from './../filmes.service';
import { Filme } from './../filme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  constructor(private filmeService: FilmesService) { }
  filmes: Filme[];
  criterio: String;

  ngOnInit() {
    this.filmeService.getAll().subscribe(data => this.filmes = data, err=> {
      alert("Aconteceu um erro!");
    });
    this.filmeService.filmesChanged.subscribe(
      (observable: any) => observable.subscribe( data => {this.filmes = data })// alert(JSON.stringify(data)); 
    );
  }

}



