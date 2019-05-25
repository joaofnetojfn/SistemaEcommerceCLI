import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorasService } from './../editoras.service';
import { Editora } from './../editora';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-editora-form',
  templateUrl: './editora-form.component.html',
  styleUrls: ['./editora-form.component.css']
})
export class EditoraFormComponent implements OnInit {

 
  private editoraIndex: number;
  private isNew: boolean = true;
  private editora: Editora;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private editoraService: EditorasService) { } 

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')){
          this.isNew = false;
          this.editoraIndex = params['id'];
          this.editoraService.get(this.editoraIndex).subscribe(data => this.editora = data);
        }else {
          this.isNew = true;
        }
      }
    );
  }
  novo(){
    this.editora = new Editora();
  }
  salvar(){
    let result;
    if(this.isNew){
      result = this.editoraService.add(this.editora);
    }else {
      result = this.editoraService.update(this.editora);
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
    this.router.navigate(['/editoras']);
  }


  excluir(){
    if(this.editora.idEditora == null){
      alert("Selecione algum cliente");
    } else {
      if(confirm("Você relamente quer excluir o cliente"+ this.editora.nome + "?")){ 
      this.editoraService.remove(this.editora.idEditora)
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
