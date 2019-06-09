import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class LoginServiceService {
  private url: string = 'http://localhost:9000/login';

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(private router:Router, private http: Http) { }

  getAll(): Observable<User[]>{
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  singIn(user: User){
    this.getLogin(user).subscribe(data => 
      {
        if (data) {
          this.authenticated = true;
          this.showNavBar(true);
          this.router.navigate(['/']);
          console.log("Está Autenticado ? " + this.authenticated)
        } else {
          this.authenticated = false;
          console.log("Está Autenticado ? " + this.authenticated)
        }
      });
  }

  getLogin(user: User): Observable<User> {
    return this.http.post(this.url,JSON.stringify(user), 
    {headers: this.getHeaderes()})
    .map(data => {
      return data.ok;
    }
    ).catch(this.handleError);
  }

  private getHeaderes(){
    let headers = new Headers ();
    headers.append('Content-Type','application/Json');
    return headers;
  }

  private handleError(error: any){
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro Login',error);
    return Observable.throw(erro);
  }

  logout(){
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean){
    this.showNavBarEmitter.emit(ifShow);
  }
}
