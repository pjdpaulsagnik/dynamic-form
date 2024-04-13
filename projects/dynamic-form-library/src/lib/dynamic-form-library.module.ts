import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicFormLibraryComponent } from './dynamic-form-library.component';



@NgModule({
  declarations: [
    DynamicFormLibraryComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    DynamicFormLibraryComponent
  ]
})
export class DynamicFormLibraryModule { }
