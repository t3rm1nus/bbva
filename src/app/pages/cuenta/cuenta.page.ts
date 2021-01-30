import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { AppState } from './../../store/reducers';
import * as State from './../../store/reducers/auth.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  name$: Observable<AppState>;
  lastconnect$: Observable<AppState>;
  lastconnect;
  isAdmin$: Observable<AppState>;
  isAdmin;
  dias;
  horas;
  minutos;
  segundos;
  horaDeConexion;
  intervalo;

  constructor(
    private store: Store<AppState>
  ) {
    this.name$ = this.store.pipe(select(State.getUserName));
    this.name$.subscribe(val => {});

    //VARIABLE PREPARADA PARA RECUPERAR LA ULTIMA FECHA DE LOGIN DE LA BBDD (como va con mocks no puedo guardarla , ahora solo se guarda el usuario en localstorage)
    this.lastconnect$ = this.store.pipe(select(State.getLastConnect));
    this.lastconnect$.subscribe(val => {
      this.lastconnect = val;
    });

    this.isAdmin$ = this.store.pipe(select(State.getIsAdmin));
    this.isAdmin$.subscribe(val => {
      this.isAdmin = val;
    });
  }
  
  ngOnInit() {
    let s = 0;
    let m = 0;
    let h = 0;
    let d = 0;

    const start = Date.now();

    this.intervalo = setInterval(() => {     
      s++;
      if (s>59){m++;s=0;}
      if (m>59){h++;m=0;}
      if (h>24){d++;h=0;}
  
      if (s<10){this.segundos="0"+s;}else{this.segundos=s;}
      if (m<10){this.minutos="0"+m;}else{this.minutos=m;}
      if (h<10){this.horas="0"+h;}else{this.horas=h;}
      if (d<10){this.dias="0"+d;}else{this.dias=d;}
  }, 1000)

  }

  logout(){
    //Faltaria pasar esto por una acción y agregarle un effect para hacer el reload de la app
    localStorage.clear();
    window.location.reload()
  }

}
