import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email:any = ["abhi@123.com","abhi@1234.com","abhi@1235.com"];
  pass:any = ["123","1234","12345"];




constructor(private router: Router){
}

public onLoginClick(email, pass) {

for(var i=0;i<this.email.length;i++){
  if(email==this.email[i]&&pass==this.pass[i]){
    {

      this.router.navigate(['dashboard']);
    }
    console.log(email, pass);
  }
}

}
}
