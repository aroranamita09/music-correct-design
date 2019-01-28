import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [ {path: '', redirectTo : '/searchlist', pathMatch: 'full'},
{path: 'searchlist', component: SearchlistComponent },
{path: '**' , component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SearchlistComponent, PageNotFoundComponent];
