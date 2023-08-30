import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person{
  name: string;
  lastname: string;
  age: number | undefined;
  married: boolean;
  country: number | null;
}

interface Country{
  id: number;
  name: string;
}

@Component({
  selector: 'app-normal-form',
  templateUrl: './normal-form.component.html',
  styleUrls: ['./normal-form.component.css']
})
export class NormalFormComponent {
  public person: Person = {
    name: '',
    lastname: '',
    age: undefined,
    married: false,
    country: null,
  }

  public countries: Country[] = [
    {
      id: 1,
      name: 'Colombia'
    },
    {
      id: 2,
      name: 'Panamá'
    },
    {
      id: 3,
      name: 'Costa Rica'
    },
    {
      id: 4,
      name: 'El Salvador'
    },
    {
      id: 5,
      name: 'Honduras'
    },
    {
      id: 6,
      name: 'EEUU'
    },
  ]

  sendData(form: NgForm): void{

    if(form.valid){
      console.log(form.value);
    }
    
  }

  validAge(age: number): boolean{
    
    if(age >= 0){

      return false;

    } else {

      return true;
    }

  }
}
