import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { WikiRoutingModule } from './wiki-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WikiRoutingModule
  ],
  declarations: [WikiComponent],
  exports: [
    WikiComponent
  ]
})
export class WikiModule { }
