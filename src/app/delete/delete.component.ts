import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {

  constructor() { }

  employees = [{eid:21,name:"Abhishek" ,dep:"Datascience"},{eid:311,name:"Chandan" ,dep:"BAI"},
  {eid:211,name:"Sandeep" ,dep:"Testing"},{eid:121,name:"Pankaj" ,dep:"Intern"},
  {eid:521,name:"Nilkesh" ,dep:"Webdevlopment"},{eid:201,name:"Eshaan" ,dep:"Support"}];
  model:any={};
  msg:any="";


  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
  }
  clickMe(){
    this.msg = "";
  }

}
