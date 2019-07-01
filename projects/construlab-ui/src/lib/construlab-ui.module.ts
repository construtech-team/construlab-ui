import { NgModule } from '@angular/core';
import { ConstrulabUiComponent } from './construlab-ui.component';
import { ConsCardComponent } from './cons-card/cons-card.component';

@NgModule({
  declarations: [ConstrulabUiComponent, ConsCardComponent],
  imports: [
  ],
  exports: [ConstrulabUiComponent]
})
export class ConstrulabUiModule { }
