import { Component } from '@angular/core';
import { DynamicFormLibraryService } from 'projects/dynamic-form-library/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';

  inputArr : any[] = [];

  constructor(private dynamicLibServ: DynamicFormLibraryService) {
    this.dynamicLibServ.ModuleOneSub.subscribe((inputData) => {
      this.inputArr.push(inputData);
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("Input Arr : ",this.inputArr);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log("Input Arr : ",this.inputArr);

  }
}
