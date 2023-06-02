import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { PinComponent } from './pin/pin.component';
import { PinListComponent } from './pin-list/pin-list.component';

import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import {HttpClientModule} from "@angular/common/http";


const CustomSelectOptions: INgxSelectOptions = { 
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    PinComponent,
    PinListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
