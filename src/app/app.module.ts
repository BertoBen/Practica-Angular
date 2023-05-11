import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PrincipalComponent } from './layouts/carousel/principal/principal.component';
import { SegundarioComponent } from './layouts/carousel/segundario/segundario.component';
import { ListaComponent } from './catalogo/lista/lista.component';
import { ProductoComponent } from './catalogo/producto/producto.component';
import { CardComponent } from './catalogo/card/card.component';
import { CategoriasComponent } from './layouts/categorias/categorias.component';
import { CardcategoriaComponent } from './layouts/cardcategoria/cardcategoria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AcercadeComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    SegundarioComponent,
    ListaComponent,
    ProductoComponent,
    CardComponent,
    CategoriasComponent,
    CardcategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
