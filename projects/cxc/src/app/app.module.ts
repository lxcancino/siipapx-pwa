import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FuseModule } from '@fuse/fuse.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FuseModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
