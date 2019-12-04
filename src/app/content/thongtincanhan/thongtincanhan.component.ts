import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-thongtincanhan',
  templateUrl: './thongtincanhan.component.html',
  styleUrls: ['./thongtincanhan.component.css']
})
export class ThongtincanhanComponent implements OnInit {

  public learnerCard;
  public oldPassword;
  public newPassword;
  public confirmPassword;

  public infoLearn;
  public user;
  constructor(
    private servicesService: ServicesService,

  ) { }

  ngOnInit() {
    this.learnerCard = 'HV0000007';
    this.getInfor();
  }

  public getInfor() {
    this.servicesService.getByCarrdId(this.learnerCard).subscribe(result => {
      this.infoLearn = result;
    });
  }

  public DoiMatKhau() {
    this.user.password = this.newPassword;
    // tslint:disable-next-line: triple-equals
    if (this.newPassword == this.confirmPassword) {
      this.servicesService.putUser(this.user).subscribe(result => {
    //    this.thongBaoService.showNotification(1, 'Đổi mật khẩu', 'Thành công!');
      }, error => {
     //   this.thongBaoService.showNotification(3, 'Đổi mật khẩu', 'Không thành công');
      });
    } else {
  //    this.thongBaoService.showNotification(2, 'Đổi mật khẩu', 'Mật khẩu không trùng khớp');
    }
  }
}
