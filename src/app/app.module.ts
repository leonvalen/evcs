import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipe/capitalizar.pipe';
import { CompindicadoresComponent } from './componets/compindicadores/compindicadores.component';

import { SwindicadoresService } from './services/swindicadores.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    CompindicadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SwindicadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
