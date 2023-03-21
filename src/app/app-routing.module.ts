import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFligthComponent } from './components/find-fligth/find-fligth.component';

const routes: Routes = [
  { path: '', component: FindFligthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
