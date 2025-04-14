
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BankLoanApp';
  loggedUserData: any;

  constructor() { 
    const loggedData = sessionStorage.getItem('bankUser');
    if (loggedData != null) {
        this.loggedUserData = JSON.parse(loggedData);
    } else {
        this.loggedUserData = null;
    }
  }
  onLogoff(){
    sessionStorage.removeItem("bankUser");
  }

}
