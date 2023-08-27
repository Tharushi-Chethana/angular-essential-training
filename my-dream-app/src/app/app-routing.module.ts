import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MideaItemFormComponent } from './midea-item-form/midea-item-form.component';
import { MideaItemListComponent } from './midea-item-list/midea-item-list.component';

const routes: Routes = [
  {path: 'add', component: MideaItemFormComponent},
  {path: ':mideam', component:MideaItemListComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
