import { Component, OnInit } from '@angular/core';
import {VariablesService} from "../variables.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public person:Person;
  public sideBarOpen: boolean = false;

  constructor(private variablesService: VariablesService) {
    this.person = variablesService.person;
  }

  ngOnInit() {
  }


  //Mostra e esconde a barra de navegacao lateral
  sideNav(){
    if(!this.sideBarOpen){
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    this.sideBarOpen = !this.sideBarOpen;

  }


}
