import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MideaItemComponent } from './midea-item/midea-item.component';
import { MideaItemListComponent } from './midea-item-list/midea-item-list.component';
import { FavoriteDirective } from './favorite.directives';
import { CategoryListPipe } from './category-list.pipe';
import { FormsModule } from '@angular/forms';
import { MideaItemFormComponent } from './midea-item-form/midea-item-form.component';

@NgModule({
  //declarations: used to make components, directives, and pipes that available 
  declarations: [
    AppComponent,
    MideaItemComponent,
    MideaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MideaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
