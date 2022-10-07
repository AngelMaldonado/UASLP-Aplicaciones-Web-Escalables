import { Component, OnInit } from '@angular/core';
import {DogsService} from "../dogs.service";
import {Dog} from "../dog.interface";

@Component({
  selector: 'app-form-adopt',
  templateUrl: './form-adopt.component.html',
  styleUrls: ['./form-adopt.component.css']
})
export class FormAdoptComponent implements OnInit {
  dogName: string = '';

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
  }

  adoptDog() {
    let dogToAdopt = this.dogsService.dogs.find(dog => dog.name === this.dogName);
    if(dogToAdopt) {
      this.dogsService.dogs.splice(dogToAdopt.id-1, 1);
      this.dogName = '';
    }
  }
}
