// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './app.module.shared'; // Import SharedModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule], // Include SharedModule in the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
