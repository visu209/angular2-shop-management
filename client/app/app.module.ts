import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, CustomerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }