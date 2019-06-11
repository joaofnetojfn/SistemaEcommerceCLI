import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Filme } from './filme';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilmesService {

  private url: string = 'http://localhost:9000/filmes';

  filmesChanged = new EventEmitter<Observable<Filme[]>>();

  constructor (private http: Http) { }

  getAll(): Observable<Filme[]>{
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  /*getFilmeCategoria(){
    return this.http.get(this.url)
                    .do(data => this.filmesChanged.emit())
                    .catch(this.handleError);
  }*/

  add(filme: Filme) {
    return this.http.post(this.url,JSON.stringify(filme), 
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.filmesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id), 
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.filmesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(filme: Filme){
    return this.http.put(this.url,JSON.stringify(filme),
    {headers: this.getHeaderes()})
    .do(data => this.filmesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list:any) => list.find(filme => filme.codigo == id))
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
    console.error('Ocorreu um erro categoras',error);
    return Observable.throw(erro);
  }

}


