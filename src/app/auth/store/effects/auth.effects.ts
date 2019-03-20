import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { map, tap, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of, Observable, defer } from 'rxjs';

import { AuthActionTypes } from '../actions/auth.actions';
import * as fromActions from '../actions/auth.actions';
import * as fromRoot from 'app/store';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private service: AuthService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<fromActions.Login>(AuthActionTypes.LOGIN),
    map(action => action.payload),
    switchMap(auth => {
      return this.service.login(auth).pipe(
        map(userInfo => new fromActions.LoginSuccess(userInfo)),
        catchError(error => of(new fromActions.LoginFail(error)))
      );
    })
  );

  @Effect()
  loginRedirect$ = this.actions$.pipe(
    ofType<fromActions.LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
    map(action => action.payload),
    tap(session => {
      session.start = new Date();
      localStorage.setItem('siipapx_session', JSON.stringify(session));
    }),
    map(() => new fromRoot.Go({ path: ['/'] }))
  );

  @Effect()
  loadSessionAfterLogin$ = this.actions$.pipe(
    ofType<fromActions.LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
    map(action => action.payload),
    map(() => new fromActions.LoadUserSession())
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<fromActions.Logout>(AuthActionTypes.LOGOUT),
    tap(() => localStorage.removeItem('siipapx_session')),
    map(() => new fromRoot.Go({ path: ['auth/login'] }))
  );

  @Effect()
  loadSession = this.actions$.pipe(
    ofType<fromActions.LoadUserSession>(AuthActionTypes.LoadUserSession),
    tap(() => console.log('Loading session information.....')),
    mergeMap(() => {
      return this.service.getSessionInfo().pipe(
        map(
          sessionInfo => new fromActions.LoadUserSessionSuccess({ sessionInfo })
        ),
        catchError(response => of(new fromRoot.GlobalHttpError({ response })))
      );
    })
  );

  @Effect({ dispatch: false })
  init$: Observable<any> = defer(() => of(null))
    .pipe
    // tap(() => console.log('Cargando detalles de la session....'))
    // tap(() => console.log('Cargando detalles de la session....'))
    ();
}
