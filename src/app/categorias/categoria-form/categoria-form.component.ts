import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from './../categorias.service';
import { Categoria } from './../categoria';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

 
  private categoriaIndex: number;
  private isNew: boolean = true;
  private categoria: Categoria;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private categoriaService: CategoriasService) { } 

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.categoriaIndex = params['id'];
          this.categoriaService.get(this.categoriaIndex).subscribe(data => this.categoria = data);
        }else {
          this.isNew = true;
        }
      }
    );
  }
  novo(){
    this.categoria = new Categoria();
  }
  salvar(){
    let result;
    if(this.isNew){
      result = this.categoriaService.add(this.categoria);
    }else {
      result = this.categoriaService.update(this.categoria);
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
    this.router.navigate(['/categorias']);
  }


  excluir(){
    if(this.categoria.idCategoria == null){
      alert("Selecione algum cliente");
    } else {
      if(confirm("Você relamente quer excluir o cliente"+ this.categoria.descricao + "?")){ 
      this.categoriaService.remove(this.categoria.idCategoria)
      .subscribe(
        data => alert('Categoria removido'+data),
        err => {
          alert("Categoria não removido.");
        });
        this.novo();
        this.voltar();
      }
    }
  }

}
