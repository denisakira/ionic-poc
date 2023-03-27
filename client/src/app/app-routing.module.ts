import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-form-tab',
    loadChildren: () => import('./user-form-tab/user-form-tab.module').then( m => m.UserFormTabPageModule)
  },
  {
    path: 'user-information-tab',
    loadChildren: () => import('./user-information-tab/user-information-tab.module').then( m => m.UserInformationTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
