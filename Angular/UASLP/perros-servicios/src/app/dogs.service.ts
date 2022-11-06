import { Injectable } from '@angular/core';
import { Dog } from './dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[] = [
    {id: 1,name: 'Dexter'},
    {id: 2,name: 'Daisy'},
    {id: 3,name: 'Odie'},
    {id: 4,name: 'Toto'},
    {id: 5,name: 'Balto'},
    {id: 6,name: 'Marley'}
  ];
  constructor() { }

  getDogs(): Dog[] {
    return [...this.dogs];
  }

  addDog(dog: Dog) {
    this.dogs.push(dog);
  }
}
