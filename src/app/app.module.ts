import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgFor, NgIf } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, AppComponent, NgFor,AppRoutingModule,HttpClientModule,NgIf,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
  ],

  declarations: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
