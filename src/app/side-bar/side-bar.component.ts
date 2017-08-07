import { Component, OnInit } from '@angular/core';
import {VariablesService} from "../variables.service";
import {Person} from "../../models/person";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public person:Person;
  public page: string = "global_chat";

  constructor(private variablesService: VariablesService) {
    this.person = variablesService.person;
  }

  ngOnInit() {
  }

  //Serve para poder deixar marcado a pagina que se esta no navegador lateral
  checkPage(page: string){
    this.page = page;
  }

}
