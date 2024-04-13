import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormLibraryService {

  InputList: Array<string> = [];

  constructor() { }

  SharingData: Subject<any> = new Subject<any>();
  ModuleOneSub: Subject<any> = new Subject<any>();
  ModuleTwoSub: Subject<any> = new Subject<any>();

}
