import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {RepositoryComponent} from './repository/repository.component';


const routes: Routes = [
  {path: 'users', component: SearchFormComponent},
  {path: 'repository', component: RepositoryComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule { }
