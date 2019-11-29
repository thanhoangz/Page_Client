import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

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
    }).subscribe(result => {
    }, error => {
    });
  }

}
