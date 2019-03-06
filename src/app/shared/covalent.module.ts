import { NgModule } from '@angular/core';
import {
  CovalentLoadingModule,
  CovalentLayoutModule,
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentMessageModule
} from '@covalent/core';

const COVALENT_MODULES: any[] = [
  CovalentLoadingModule,
  CovalentLayoutModule,
  CovalentCommonModule,
  CovalentDialogsModule,
  CovalentMessageModule
];

@NgModule({
  imports: [COVALENT_MODULES],
  exports: [COVALENT_MODULES],
  declarations: []
})
export class CovalentModule {}
