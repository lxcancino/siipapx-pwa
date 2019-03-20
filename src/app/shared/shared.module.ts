import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CovalentModule } from './covalent.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, CovalentModule],
  exports: [CommonModule, MaterialModule, CovalentModule]
})
export class SharedModule {}
