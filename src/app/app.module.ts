import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleD3Component } from './simple-d3/simple-d3.component';
import { VisLaborComponent } from './vis-labor/vis-labor.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleD3Component,
    VisLaborComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
