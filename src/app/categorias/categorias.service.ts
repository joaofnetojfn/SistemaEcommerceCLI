import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Categoria } from './categoria';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriasService {
  
  private url: string = 'http://localhost:9000/categorias';

  categoriasChanged = new EventEmitter<Observable<Categoria[]>>();

  constructor (private http: Http) { }

  getAll(): Observable<Categoria[]>{
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  add(categoria: Categoria) {
    return this.http.post(this.url,JSON.stringify(categoria), 
    {headers: this.getHeaderes()})
    .do(data => this.categoriasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id),
    {headers: this.getHeaderes()})
    .do(data => this.categoriasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(categoria: Categoria){
    return this.http.put(this.url,JSON.stringify(categoria),
    {headers: this.getHeaderes()})
    .do(data => this.categoriasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list:any) => list.find(categoria => categoria.idCategoria == id))
    .catch(this.handleError);
  }

  private getHeaderes(){
    let headers = new Headers ();
    headers.append('Content-Type','application/Json');
    return headers;
  }

  private getUrl(id: number){
    let url = `${this.url}/${id}`;
    return url;
  }

  private handleError(error: any){
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro Categoria',error);
    return Observable.throw(erro);
  }

}
