import { Editora } from './../editora';
import { Component, OnInit } from '@angular/core';
import { EditorasService } from '../editoras.service';

@Component({
  selector: 'app-editora-list',
  templateUrl: './editora-list.component.html',
  styleUrls: ['./editora-list.component.css']
})
export class EditoraListComponent implements OnInit {

  constructor(private editoraService: EditorasService) { }
  editoras: Editora[] = [];
  criterio: String;
  ngOnInit() {
    this.editoraService.getAll().subscribe(data => this.editoras = data, err => {
      alert('Aconteceu um erro!');
    });
    this.editoraService.editorasChanged.subscribe(
      (observable: any) => observable.subscribe( data =>  this.editoras = data )
    );
  }

}
