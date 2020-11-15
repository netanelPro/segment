import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import{DragDropModule} from '@angular/cdk/drag-drop';
import { DatawidgetComponent } from './datawidget/datawidget.component';
import { PlayInputComponent } from './play-input/play-input.component'
@NgModule({
  declarations: [
    AppComponent,
    
    DatawidgetComponent,
    
    PlayInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
