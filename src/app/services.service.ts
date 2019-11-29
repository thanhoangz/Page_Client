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


}
