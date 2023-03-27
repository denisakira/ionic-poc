import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserInformationTabPageRoutingModule } from './user-information-tab-routing.module';

import { UserInformationTabPage } from './user-information-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInformationTabPageRoutingModule
  ],
  declarations: [UserInformationTabPage]
})
export class UserInformationTabPageModule {}
