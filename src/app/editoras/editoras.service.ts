import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Editora } from './editora';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EditorasService {
  private url: string = 'http://localhost:9000/editoras';

  editorasChanged = new EventEmitter<Observable<Editora[]>>();

  constructor (private http: Http) { }

  getAll(): Observable<Editora[]>{
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  add(editora: Editora) {
    return this.http.post(this.url,JSON.stringify(editora), 
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.editorasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id),
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.editorasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(editora: Editora){
    return this.http.put(this.url,JSON.stringify(editora),
    {headers: this.getHeaderes()})
    .do(data => this.editorasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list:any) => list.find(editora => editora.codigo == id))
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
    console.error('Ocorreu um erro Editora',error);
    return Observable.throw(erro);
  }

}
