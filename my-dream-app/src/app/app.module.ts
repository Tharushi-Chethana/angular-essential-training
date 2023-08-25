import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MideaItemComponent } from './midea-item/midea-item.component';
import { MideaItemListComponent } from './midea-item-list/midea-item-list.component';
import { FavoriteDirective } from './favorite.directives';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  //declarations: used to make components, directives, and pipes that available 
  declarations: [
    AppComponent,
    MideaItemComponent,
    MideaItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
