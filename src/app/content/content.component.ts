import { Component, OnInit } from '@angular/core';
import {Person} from "../../models/person";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public person:Person;

  constructor() {}

  ngOnInit(){
  }

}
