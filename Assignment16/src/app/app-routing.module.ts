import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
 { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
 { path: 'technology', loadChildren: () => import('./modules/technology/technology.module').then(m => m.TechnologyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
