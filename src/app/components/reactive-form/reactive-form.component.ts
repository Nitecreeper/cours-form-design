import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public form: FormGroup;

  public customerName: FormControl = new FormControl('Xavier Ramos', [Validators.required]);
  public color: FormControl = new FormControl('#000');
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public number: FormControl = new FormControl('');

  public fruits: string[] = ['Manzana', 'Naranja', 'Cereza', 'Mandarina', 'Banano', 'Fresa'];
  public colors = [{
    "id": "e7165101-6f18-4e86-adbc-e554257c28b4",
    "name": "Purple"
  }, {
    "id": "edcc2622-b95d-4b82-b1e9-0b5d15b64c32",
    "name": "Teal"
  }, {
    "id": "54d1d08a-dabc-4d46-abff-d578981a3ccc",
    "name": "Teal"
  }, {
    "id": "c2337c5e-1c1a-41cc-b245-52afb47c2046",
    "name": "Teal"
  }, {
    "id": "a7e15e41-cdda-4619-a09b-73e1e4c0af58",
    "name": "Crimson"
  }, {
    "id": "d69feee9-5353-4fa2-a11e-dadfd56b4bab",
    "name": "Green"
  }, {
    "id": "9aebfe11-e9f2-418b-88f4-61a81cdefa27",
    "name": "Aquamarine"
  }, {
    "id": "8e1a9a47-c66a-4085-b57e-af4ade10c8b2",
    "name": "Maroon"
  }, {
    "id": "8301afec-0b74-48ad-8d2a-2c6ce30bba37",
    "name": "Maroon"
  }, {
    "id": "7e3795bb-41cf-46af-872b-cbc6dd2ef545",
    "name": "Fuscia"
  }];

  public objColors: FormControl= new FormControl();
  public fruitArray: FormControl= new FormControl();

  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      
    })

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
