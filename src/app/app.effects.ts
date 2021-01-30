import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from './store/actions/auth.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
 

  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user.username))
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
