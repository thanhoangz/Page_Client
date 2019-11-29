import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-thong-tin-diem',
  templateUrl: './thong-tin-diem.component.html',
  styleUrls: ['./thong-tin-diem.component.css']
})
export class ThongTinDiemComponent implements OnInit {

  public Diem;
    // tslint:disable-next-line: max-line-length
    public displayedColumnsDiemDinhKi: string[] = ['index', 'week', 'point', 'averagePoint', 'sortedByPoint', 'sortedByAveragePoint'];
  constructor(
    private servicesService: ServicesService,
  ) { }

  ngOnInit() {
    //  cardId => Id
    // gọi thông tin điểm theo lớp đã học theo Id
    // this.getDiemTheoLopDaHoc(result.id);
  }

    // Điểm theo lớp đã học
    public getDiemTheoLopDaHoc(id) {
      this.servicesService.getDiem(id).subscribe((result4: any) => {
        this.Diem = result4;
      }, error => {
      });
    }
}
