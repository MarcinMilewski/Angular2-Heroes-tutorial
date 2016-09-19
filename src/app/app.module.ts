import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component'
import {HeroService} from "./hero/service/hero.service";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
      HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
