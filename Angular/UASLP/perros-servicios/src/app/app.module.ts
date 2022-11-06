import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormAdoptComponent } from './form-adopt/form-adopt.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormAddComponent,
    FormAdoptComponent,
    ShowDogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
