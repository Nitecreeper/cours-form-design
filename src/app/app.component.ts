import { Component } from '@angular/core';

interface Person{
  name: string;
  lastname: string;
  age: number;
  married: boolean;
  country: number;
}

interface Country{
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public person: Person = {
    name: '',
    lastname: '',
    age: 0,
    married: false,
    country: 0,
  }

  public countries: Country[] = [
    {
      id: 1,
      name: 'Colombia'
    },
    {
      id: 2,
      name: 'México'
    },
    {
      id: 3,
      name: 'Ecuador'
    },
    {
      id: 4,
      name: 'Argentina'
    },
    {
      id: 5,
      name: 'Italia'
    },
    {
      id: 6,
      name: 'España'
    },
  ]
}
