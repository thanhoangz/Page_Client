import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getByCarrdId(cardId) {
    return this.httpClient
      .get(`${environment.PLCServicesDomain}/api/Learners/get-by-cardid/${cardId}`);
  }

  putUser(user: any) {
    return this.httpClient
      .put(`${environment.PLCServicesDomain}/api/AppUsers/Update`, user);
  }

  logStudyProcessbyLearnerId(learnerId) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/LogSystems/get-studyprocess-by-learnerId?learnerId=${learnerId}`, null);
  }

  getDiem(id) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/Learners/get-score-by-learner?id=${id}`, null);
  }

  // tìm kiếm all chi tiết  của phiếu thu
  getReceiptsDetailById(receiptId) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/ReceiptDetails/get-all-with-conditions?receiptId=${receiptId}`, null);
  }

  // tìm kiếm all phiếu thu của học viên X
  getReceiptsByLearnerId(learnerId) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/Receipts/get-all-with-conditions?learnerId=${learnerId}`, null);
  }

  // login
  login(userName, password) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/AccountForLearners/login?userName=${userName}&password=${password}`, null);
  }

  dangkyonline(inforLearners: any) {
    return this.httpClient
      .post(`${environment.PLCServicesDomain}/api/InforLearners`, inforLearners);
  }
}
