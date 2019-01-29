import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [ {path: '', redirectTo : '/searchlist', pathMatch: 'full'},
{path: 'home', component: BodyComponent},
{path: 'playlist', component: SearchboxComponent},
{path: 'wishlist', component: SearchlistComponent },
{path: '**' , component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [SearchlistComponent, BodyComponent, SearchboxComponent, PageNotFoundComponent];
