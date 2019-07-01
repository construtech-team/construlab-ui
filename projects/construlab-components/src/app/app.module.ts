import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConstrulabUiModule } from 'construlab-ui';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConstrulabUiModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
