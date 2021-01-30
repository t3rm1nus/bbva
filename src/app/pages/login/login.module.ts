import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.page';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/auth.effects';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginComponent],
  imports: [ CommonModule, LoginPageRoutingModule, ReactiveFormsModule, FormsModule, IonicModule, StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), EffectsModule.forFeature([AuthEffects])],
  exports: [],
})
export class LoginModule {}


