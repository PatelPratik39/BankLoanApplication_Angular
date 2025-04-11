import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  showRegisterForm = signal<boolean>(false);
  http = inject(HttpClient);
  router = inject(Router);


  // create an object
  customerObject : any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  }

  // Reactive Form
loginForm: FormGroup = new FormGroup({
  userName: new FormControl(""),
  password: new FormControl("")
});


  // login Object
  loginObj: any = {
    "userName": "",
    "password": ""
  }
  

  changeView(){
    this.showRegisterForm.set(!this.showRegisterForm());
  }

  onRegister(){
    debugger;
    // console.log(this.customerObject);
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer", this.customerObject).subscribe((res:any) => {
      debugger;
      if (res.result) {
        alert("Customer Register Successfully");
      }else{
        alert(res.message)
      }
    }, error =>{
      debugger;
      alert("Customer Registration Failed");
      
    })
  }

  onLogin(){
    const formValue = this.loginForm.value;
    // debugger;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/login", formValue).subscribe((res:any) => {
      // debugger;
      if (res.result) {
        sessionStorage.setItem("bankUser", JSON.stringify(res.data));
        this.router.navigateByUrl("applicationList");
        // alert("User Login Successfully");
      }else{
        alert(res.message)
      }
    }, error =>{
      debugger;
      alert("Customer Registration Failed");
      
    })
  }
  

}
