// app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { SharedModule } from './app.module.shared';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
