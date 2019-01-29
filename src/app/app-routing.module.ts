import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { BodyComponent } from './body/body.component';
import { AddComponent } from './body/cards/add/add.component';
import { DeleteComponent } from './body/cards/delete/delete.component';
import { UpdateComponent } from './body/cards/update/update.component';
const routes: Routes = [ {path: '', redirectTo : '/wishlist', pathMatch: 'full'},
{path: 'home', component: BodyComponent},
{path: 'playlist', component: SearchboxComponent},
{path: 'wishlist', component: SearchlistComponent },
{path: 'wishlist/:{id}', component: AddComponent },
{path: 'wishlist/:{id}', component: UpdateComponent},
{path: 'wishlist/:{id}', component: DeleteComponent },
{path: '**' , component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponent = [SearchlistComponent, BodyComponent, SearchboxComponent, PageNotFoundComponent, UpdateComponent,  DeleteComponent];
