import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [FooterComponent]
})
export class SxwCommonModule {}
