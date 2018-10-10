import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './feature/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'search',
    loadChildren: './feature/search/search.module#SearchModule',
  },
  {
    path: 'upload',
    loadChildren: './feature/upload/upload.module#UploadModule',
  },
  {
    path: 'wiki',
    loadChildren: './feature/wiki/wiki.module#WikiModule',
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
