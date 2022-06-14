import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PrettyFizzbuzzComponent } from './pretty-fizzbuzz/pretty-fizzbuzz.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
  ],
  declarations: [AppComponent, PrettyFizzbuzzComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
