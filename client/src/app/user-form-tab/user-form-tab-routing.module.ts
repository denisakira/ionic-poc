import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormTabPage } from './user-form-tab.page';

const routes: Routes = [
  {
    path: '',
    component: UserFormTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFormTabPageRoutingModule {}
