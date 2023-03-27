import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user-form-tab',
        loadChildren: () => import('../user-form-tab/user-form-tab.module').then(m => m.UserFormTabPageModule)
      },
      {
        path: 'user-information-tab',
        loadChildren: () => import('../user-information-tab/user-information-tab.module').then(m => m.UserInformationTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/user-form-tab',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/user-form-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
