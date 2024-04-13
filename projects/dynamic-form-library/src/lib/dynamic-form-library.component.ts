import { Component, OnInit } from '@angular/core';
import { DynamicFormLibraryService } from './dynamic-form-library.service';

@Component({
  selector: 'lib-dynamic-form-library',
  template: `
    <p>
      dynamic-form-library works!
    </p>
    <label id="username">Username : </label>
    <input type="text" [(ngModel)]="username" for="username">
    <br/>
    <label id="email">Email : </label>
    <input type="text" [(ngModel)]="email" for="email">
    <br/>
    <label id="contact">Contact : </label>
    <input type="tel" [(ngModel)]="contact" for="contact">
    <button (click)="submit()">Send Data To UI</button>
    <br/>
  `,
  styles: [
  ]
})
export class DynamicFormLibraryComponent implements OnInit {

  username: string = "";
  email: string = "";
  contact: any;

  constructor(private _sharedSubject: DynamicFormLibraryService) { }

  ngOnInit(): void {
  }

  submit() {
    let postObj = {
      username: this.username,
      email: this.email,
      contact: this.contact
    }

    this._sharedSubject.ModuleOneSub.next(postObj);
    this.username = "";
    this.email = "";
    this.contact = "";

  }
}
