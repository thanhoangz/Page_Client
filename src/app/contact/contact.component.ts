import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public FirstName = '';
  public LastName = '';
  public Sex = 1;
  public Birthday;
  public Address = '';
  public Email = '';
  public Phone = '';
  public ParentFullName = '';
  public ParentPhone = '';
  public Note = '';
  constructor(
    private servicesService: ServicesService,
 //   private ToastrServices: ToastrService,
  ) { }

  ngOnInit() {
  }

  public dangki() {
    this.servicesService.dangkyonline({
      firstName: this.FirstName,
      lastName: this.LastName,
      address: this.Address,
      email: this.Email,
      phone: this.Phone,
      parentFullName: this.ParentFullName,
      parentPhone: this.ParentPhone,
      note: this.Note,
    }).subscribe(result => {
     // this.ToastrServices.success('Đăng ký thành công');
     alert('Đăng ký thành công');
     this.FirstName = '';
     this.LastName = '';
     this.Email = '';
     this.Address = '';
     this.Phone = '';
     this.ParentFullName = '';
     this.ParentPhone = '';
     this.Note = '';
    }, error => {
    });
  }

}
