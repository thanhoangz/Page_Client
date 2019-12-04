import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-lich-su-dong-tien',
  templateUrl: './lich-su-dong-tien.component.html',
  styleUrls: ['./lich-su-dong-tien.component.css']
})
export class LichSuDongTienComponent implements OnInit {

  public receiptDetails;
  public receipts;
  // tslint:disable-next-line: max-line-length
  public displayedColumnsReceiptsDetail: string[] = ['index', 'languageClassName', 'month', 'tuition', 'fundMoney', 'infrastructureMoney', 'otherMoney', 'totalMoney'];
  // tslint:disable-next-line: member-ordering
  public dataSourceReceiptsDetail = new MatTableDataSource(this.receiptDetails);
  constructor(
    public servicesService: ServicesService,
  ) { }

  ngOnInit() {
   // cardId => Id
    // gọi thông tin phiếu thu theo id
  //  this.getReceiptsByLearnerId(result.id);
  }

  // quá trình đóng họ
  public getReceiptsByLearnerId(id) {
    this.servicesService.getReceiptsByLearnerId(id).subscribe((result2: any) => {
      this.receipts = result2;
    }, error => {
    });
  }

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
  */
}
