import { Component, OnInit } from '@angular/core';
import {Dog} from "../dog.interface";
import {DogsService} from "../dogs.service";

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  newDog: Dog = {id: -1, name: ''};

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
  }

  addDog(): void {
    this.newDog.id = this.dogsService.dogs.length + 1;
    this.dogsService.addDog(this.newDog);
    this.newDog = {id: -1, name: ''};
  }
}
