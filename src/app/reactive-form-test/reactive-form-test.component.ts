import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([
        // this.createItem()
      ]),
      name: ['', Validators.required],
      role: ['', Validators.required],
      address: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  get itemsFormArray(): FormArray {
    return this.form.get('items') as FormArray;
  }

  createItem(): FormGroup {
    // return this.fb.group({
    //   name: ['', Validators.required], // Initialize as empty string
    //   role: ['', Validators.required], // Initialize as empty string
    //   address: ['', Validators.required] // Initialize as empty string
    // });
    return this.fb.group([]);
  }

  createItemWithValues(name: string, role: string, address: string): FormGroup {
    return this.fb.group({
      name: [name, Validators.required], // Initialize as empty string
      role: [role, Validators.required], // Initialize as empty string
      address: [address, Validators.required] // Initialize as empty string
    });
  }

  addItem(): void {
    // (this.form.get('items') as FormArray).push(this.createItem());
    // const newItem = this.createItem(); // Create a new item FormGroup
      // Set values of name, role, and address from the main form to each item in the array
      // this.itemsFormArray.controls.forEach(control => {
      //   control.patchValue({
      //     name: this.form.get('name')?.value,
      //     role: this.form.get('role')?.value,
      //     address: this.form.get('address')?.value
      //   });
      // });

      const newItem = this.createItemWithValues(
        this.form.get('name')?.value,
        this.form.get('role')?.value,
        this.form.get('address')?.value
      );
    this.itemsFormArray.push(newItem);
    console.log('====================================');
    console.log(" FORM ARRAY : ",this.itemsFormArray);
    console.log('====================================');
  }
}
