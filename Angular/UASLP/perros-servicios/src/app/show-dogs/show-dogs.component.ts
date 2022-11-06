import { Component, OnInit } from '@angular/core';
import { DogsService } from "../dogs.service";
import {Dog} from "../dog.interface";

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent implements OnInit {
  get dogs() {
    return this.dogService.getDogs();
  }

  constructor(private dogService: DogsService) { }

  ngOnInit(): void {
  }

}
