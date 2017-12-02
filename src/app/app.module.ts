import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleD3Component } from './simple-d3/simple-d3.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleD3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
