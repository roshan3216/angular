import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx';
import { Ui5ThemingModule } from "@ui5/theming-ngx";
import { InputComponent } from "@ui5/webcomponents-ngx/main/input";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    Ui5WebcomponentsModule,
    Ui5ThemingModule.forRoot({
      defaultTheme: "sap_horizon"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
