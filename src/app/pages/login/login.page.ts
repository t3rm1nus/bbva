import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './resources/auth.service';
import { NgForm } from '@angular/forms';
import { User } from './resources/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginComponent implements OnInit  {
  loginForm: FormGroup;
  name$: Observable<string>;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {    
    this.loginForm = this.fb.group({
      email: ["", [Validators.email,Validators.required]],
      password: ["", Validators.required]
    });   
  }
  user: User;
  onSubmit(f: NgForm) {    
    this.store.dispatch(
      fromAuthActions.loginPage({
        username: f.value.email,
        password: f.value.password,
      })      
    );   
  }
}










