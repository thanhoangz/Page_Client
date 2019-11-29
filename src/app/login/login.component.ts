import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { ExchangeDataService } from '../exchange-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private exchangeDataService: ExchangeDataService,
  ) { }

  ngOnInit() {
  }

  public login() {
    this.servicesService.login(this.username, this.password).subscribe(result => {
      if (result !== '') {
        console.log(result);
        this.createExchangeId(this.username);  // truyền
        this.router.navigateByUrl('layout');
      } else {
        console.log('đăng nhập không thành công');
      }
    }
      , error => { });
  }

   // hàm ném dữ liệu
   createExchangeId(id) {
    this.exchangeDataService.changeId(id);
  }
}
