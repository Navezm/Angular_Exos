import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { BasketComponent } from './components/basket/basket.component';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { CharToUpperPipe } from './pipes/char-to-upper.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginationPipe } from './pipes/mat-pagination.pipe';
import { CreateComponent } from './create/create.component';
import { InputComponent } from './forms/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BasketComponent,
    UcfirstPipe,
    CharToUpperPipe,
    PaginationComponent,
    MatPaginationPipe,
    CreateComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UcfirstPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
