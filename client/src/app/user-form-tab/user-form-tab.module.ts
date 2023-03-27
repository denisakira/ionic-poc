import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserFormTabPageRoutingModule } from './user-form-tab-routing.module';

import { UserFormTabPage } from './user-form-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFormTabPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserFormTabPage]
})
export class UserFormTabPageModule {}
