import { Component, Input } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public customerName: FormControl = new FormControl();

  constructor(){
    this.customerName.valueChanges.subscribe(
      (value) => {
        console.log(`El valor es: ${value}`);
        
      }
    );
  }

  sendData(form: NgForm): void{
    console.log(form);
  }

}
