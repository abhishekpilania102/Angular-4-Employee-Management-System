import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {

  constructor() { }


    employees = [{eid:21,name:"Abhishek" ,dep:"Datascience"},{eid:311,name:"Chandan" ,dep:"BAI"},
    {eid:211,name:"Sandeep" ,dep:"Testing"},{eid:121,name:"Pankaj" ,dep:"Intern"},
    {eid:521,name:"Nilkesh" ,dep:"Webdevlopment"},{eid:201,name:"Eshaan" ,dep:"Support"}];
    model:any={};
    model2:any={};
    msg:any="";

    myValue;
    editEmployee(k){
      this.model2.eid = this.employees[k].eid;
      this.model2.name = this.employees[k].name;
      this.model2.dep = this.employees[k].dep;
      this.myValue = k;

    }
    updateEmployee(){
      let k= this.myValue;
      for(let i=0; i<this.employees.length;i++){
        if(i==k){
          this.employees[i]= this.model2;
          this.model2 = {};
          this.msg = "Record is successfully updated..... ";
        }
      }

    }
    clickMe(){
      this.msg = "";
    }
  }


