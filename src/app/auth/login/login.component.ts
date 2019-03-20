import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private store: Store<fromStore.AuthState>,
    private _fuseConfigService: FuseConfigService,
    private fb: FormBuilder
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(fromStore.getAuthLoading);
    this.error$ = this.store.pipe(select(fromStore.getAuthError));

    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(new fromStore.Login(this.loginForm.value));
    }
  }
}
