import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-thong-tin-qtht',
  templateUrl: './thong-tin-qtht.component.html',
  styleUrls: ['./thong-tin-qtht.component.css']
})
export class ThongTinQthtComponent implements OnInit {
  public logStudyprocess;
  public qTHTColumn: string[] = ['index', 'date', 'personnelName', 'className', 'content', 'mumberSessions'];
  public qTHTdataSource = new MatTableDataSource(this.logStudyprocess);
  constructor(
    public servicesService: ServicesService
  ) { }

  ngOnInit() {
    // tìm cardId theo id
    // gọi hàm logQTHT theo id
  }

   // chi tiết log QTHT
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
}
