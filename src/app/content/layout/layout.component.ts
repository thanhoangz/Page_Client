import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../../services.service';
import { DetailsComponent } from 'src/app/layout/details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { ExchangeDataService } from 'src/app/exchange-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  panelOpenState = false;

  // thông tin cá nhân
  public learnerCard;
  public oldPassword;
  public newPassword;
  public confirmPassword;
  public infoLearn = {
    id: '',
    cardId: '',
    firstName: '',
    lastName: '',
    birthday: null,
    sex: null,
    address: '',
    email: '',
    facebook: '',
    phone: '',
    status: null,
    parentFullName: '',
    parentPhone: '',
    note: '',
    guestTypeName: '',
  };
  public user;

  // quá trình học tập
  public logStudyprocess;
  public qTHTColumn: string[] = ['index', 'date', 'personnelName', 'className', 'content', 'mumberSessions'];
  public qTHTdataSource = new MatTableDataSource(this.logStudyprocess);

  // điểm
  public Diem;
  // tslint:disable-next-line: max-line-length
  public displayedColumnsDiemDinhKi: string[] = ['index', 'week', 'point', 'averagePoint', 'sortedByPoint', 'sortedByAveragePoint'];

  // lịch sử đóng tiền
  public receiptDetails;
  public receipts;
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: max-line-length
  public displayedColumnsReceiptsDetail: string[] = ['index', 'languageClassName', 'month', 'tuition', 'fundMoney', 'infrastructureMoney', 'otherMoney', 'totalMoney'];
  // tslint:disable-next-line: member-ordering
  public dataSourceReceiptsDetail = new MatTableDataSource(this.receiptDetails);

  // tslint:disable-next-line: max-line-length
  public displayedColumnsReceipts: string[] = ['index', 'NgayThu', 'LoaiThu', 'TongTien'];
  // tslint:disable-next-line: member-ordering
  public dataSourceReceipts = new MatTableDataSource(this.receipts);

  public isOpenDialog = false;
  public screenHeight: any;
  public screenWidth: any;
  constructor(
    public servicesService: ServicesService,
    public matDialog: MatDialog,
    private exchangeDataService: ExchangeDataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.exchangeDataService.idSource.subscribe(message => {
      this.learnerCard = message;
    });
    console.log(this.learnerCard);
    // thông tin cá nhân
    // this.learnerCard = 'HV00050';
    this.getInfor();

  }


  //#region thông tin cá nhân
  public getInfor() {
    this.servicesService.getByCarrdId(this.learnerCard).subscribe((result: any) => {
      this.infoLearn.id = result.id;
      this.infoLearn.cardId = result.cardId;
      this.infoLearn.firstName = result.firstName;
      this.infoLearn.lastName = result.lastName;
      this.infoLearn.sex = result.sex;
      this.infoLearn.birthday = result.birthday;
      this.infoLearn.address = result.address;
      this.infoLearn.email = result.email;
      this.infoLearn.facebook = result.facebook;
      this.infoLearn.phone = result.phone;
      this.infoLearn.status = result.status;
      this.infoLearn.parentFullName = result.parentFullName;
      this.infoLearn.parentPhone = result.parentPhone;
      this.infoLearn.note = result.note;
      this.infoLearn.guestTypeName = result.guestTypeName;
      this.infoLearn.lastName = result.lastName;
      this.getLogQTHT(result.id);
      console.log(result.id);
      this.getDiemTheoLopDaHoc(result.id);
      this.getReceiptsByLearnerId(result.id);
    });
  }

  public DangXuat() {
    this.router.navigateByUrl('main');
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
  //#endregion

  //#region  chi tiết log QTHT
  public getLogQTHT(id) {
    this.servicesService.logStudyProcessbyLearnerId(id).subscribe((result: any) => {
      this.logStudyprocess = result;
      this.loadtableLogQTHT(result);
    }, error => {
    });
  }
  public loadtableLogQTHT(data3: any) {
    this.qTHTdataSource = new MatTableDataSource(data3);
  }
  //#endregion

  //#region Điểm
  // Điểm theo lớp đã học
  public getDiemTheoLopDaHoc(id) {
    this.servicesService.getDiem(id).subscribe((result4: any) => {
      this.Diem = result4;
    }, error => {
    });
  }
  //#endregion

  //#region Lịch sử đóng tiền
  // quá trình đóng họ
  public getReceiptsByLearnerId(id) {
    this.servicesService.getReceiptsByLearnerId(id).subscribe((result2: any) => {
      this.receipts = result2;
      console.log(result2[0]);
    }, error => {
    });
  }

/*
  public ChiTietPhieuThu(receip: any) {
    if (!this.isOpenDialog) {
      this.isOpenDialog = true;
      const widthMachine = (this.screenWidth < 500) ? 0.8 * this.screenWidth : 0.5 * this.screenWidth;
      this.matDialog.open(DetailsComponent,
        {
          width: `${widthMachine}px`,
          data: { _receip: receip }
        }).afterClosed().subscribe(result => {
          this.isOpenDialog = false;
        });
    }
  }
*/
/*
  // chi tiết đóng họ
  public getReceiptDetailsByReceiptId(id) {
    this.servicesService.getReceiptsDetailById(id).subscribe((result: any) => {
      this.receiptDetails = result;
      this.loadTablesReceiptsDetail(result);
    }, error => {
    });
  }
  public loadTablesReceiptsDetail(data3: any) {
    this.dataSourceReceiptsDetail = new MatTableDataSource(data3);
  }
  //#endregion
  */
}
