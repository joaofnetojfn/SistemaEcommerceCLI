import { Categoria } from './../../categorias/categoria';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from './../filmes.service';
import { Filme } from './../filme';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  private filmeIndex: number;
  private isNew: boolean = true;
  private filme: Filme;
  private categoriaFilme: Filme;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private filmeService: FilmesService) { } 

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.filmeIndex = params['id'];
          this.filmeService.get(this.filmeIndex).subscribe(data => {this.filme = data, alert(JSON.stringify(data))});// alert(JSON.stringify(data))
          
        }else {
          this.isNew = true;
        }
      }
    );
  }
  novo(){
    this.filme = new Filme();
    this.categoriaFilme = new Filme();
  }
  salvar(){
    let result;
    if(this.isNew){
      result = this.filmeService.add(this.filme);
    }else {
      result = this.filmeService.update(this.filme);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('Sucesso '+ data), 
    err => { 
      alert("An error occurred. "+ err);
    });
  }

  cancelar(){
    this.voltar();
  }
  voltar(){
    this.router.navigate(['/filmes']);
  }


  excluir(){
    if(this.filme.codigo == null){
      alert("Selecione algum cliente");
    } else {
      if(confirm("Você relamente quer excluir o filme"+ this.filme.autor + "?")){ 
      this.filmeService.remove(this.filme.codigo)
      .subscribe(
        data => alert('Cliente removido'+data),
        err => {
          alert("CLiente não removido.");
        });
        this.novo();
        this.voltar();
      }
    }
  }
}
