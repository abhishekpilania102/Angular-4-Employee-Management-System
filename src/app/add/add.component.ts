import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor() { }
  employees = [];

  model:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... ";

  }
  clickMe(){
    this.msg = "";
  }


}
