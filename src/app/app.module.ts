import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { UserinputComponent } from './userinput/userinput.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    UserinputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
