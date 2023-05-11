import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ListaComponent } from './catalogo/lista/lista.component';
import { ProductoComponent } from './catalogo/producto/producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'acerca', component: AcercadeComponent},
  { path: 'catalogo', component: ListaComponent},
  { path: 'producto/:idArticulo', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
