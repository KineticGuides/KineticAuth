import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, of, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  t: any;
  uid: any;
  url: any;
  menu: any;
  un: any;
  role: any;
  hashBuffer: any;

  constructor(private http: HttpClient) { 
    this.url='https://api.kineticcloud.ai/kmd_user.php';
    this.menu='https://api.kineticcloud.ai/api/kmd_menu.php';
  }

  getLocalStorage() {
    if (localStorage.getItem('uu')===null) {
      this.uid="0";
    } else {
      this.uid=localStorage.getItem('uu')
    }
  }


  getData(path: any, id: any, id2: any, id3: any) {
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }
  
  this.getLocalStorage();

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  getMenu() {

    this.getLocalStorage();
    const data = {    
      "uid": this.uid
    }
  
  this.t= this.http.post(this.menu, data);
  return this.t;

  }

  postData(path: any, formData: any) {
 
    this.getLocalStorage();
    const data = {
      "q" : path,
      "formData": formData,
      "uid": this.uid
    }
  this.t= this.http.post(this.url, data);
  return this.t;

  }

}

