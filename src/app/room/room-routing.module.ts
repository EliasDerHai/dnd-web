import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RoomComponent } from './room.component';

const routes: Routes = [
  { path: '', component: RoomComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
],
declarations: [
    RoomComponent
],
  exports: [
    RouterModule,
  ]
})
export class RoomRoutingModule {
 }
