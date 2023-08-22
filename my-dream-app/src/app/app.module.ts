import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MideaItemComponent } from './midea-item/midea-item.component';

@NgModule({
  //declarations: used to make components, directives, and pipes that available 
  declarations: [
    AppComponent,
    MideaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
