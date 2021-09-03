import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { BasketComponent } from './components/basket/basket.component';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { CharToUpperPipe } from './pipes/char-to-upper.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CustomSlicePipe } from './pipes/custom-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BasketComponent,
    UcfirstPipe,
    CharToUpperPipe,
    PaginationComponent,
    CustomSlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UcfirstPipe,
    CustomSlicePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
