import { Injectable } from '@angular/core';
import {Person} from "../models/person";

@Injectable()
export class VariablesService {

  //Servico para preencher as variaveis dinamicamente

  public person:Person = {name : "Bill Gates", img : "http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg", notification: 1 };

  constructor() { }

}
