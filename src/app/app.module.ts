import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconComponentComponent } from './shared/components/icon-component/icon-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
