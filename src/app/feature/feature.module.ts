import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { WikiModule } from './wiki/wiki.module';
import { UploadModule } from './upload/upload.module';
import { SearchModule } from './search/search.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class FeatureModule { }
