import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './page/global/global.component';
import { NavComponent } from './page/global/nav/nav.component';
import { HeroComponent } from './page/global/hero/hero.component';
import { FilmsComponent } from './page/global/films/films.component';
import { AnchordComponent } from './shared/components/anchord/anchord.component';
import { NavbarComponent } from './page/global/nav/navbar/navbar.component';
import { ImageComponent } from './shared/components/image/image.component';
import { MejoresComponent } from './page/global/hero/mejores/mejores.component';
import { ComediasComponent } from './page/global/films/comedias/comedias.component';
import { DramasComponent } from './page/global/films/dramas/dramas.component';
import { ContenidoComponent } from './shared/components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    HeroComponent,
    FilmsComponent,
    AnchordComponent,
    NavbarComponent,
    ImageComponent,
    MejoresComponent,
    ComediasComponent,
    DramasComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
