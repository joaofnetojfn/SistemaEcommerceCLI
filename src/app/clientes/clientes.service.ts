import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './cliente';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { timingSafeEqual } from 'crypto';


@Injectable()
export class ClientesService {

  private url: string = 'http://localhost:9000/clientes';

  clienstesChanged = new EventEmitter<Observable<Cliente[]>>();

  constructor (private http: Http) { }

  getAll(): Observable<Cliente[]>{
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  add(cliente: Cliente) {
    return this.http.post(this.url,JSON.stringify(cliente), 
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.clienstesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id), 
    {headers: this.getHeaderes()})
    //.map(res => res.json().data)
    .do(data => this.clienstesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(cliente: Cliente){
    return this.http.put(this.url,JSON.stringify(cliente),
    {headers: this.getHeaderes()})
    .do(data => this.clienstesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number){
    return this.getAll()
    .map((list:any) => list.find(cliente => cliente.codigo == id))
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
    console.error('Ocorreu um erro Clientes',error);
    return Observable.throw(erro);
  }

}
