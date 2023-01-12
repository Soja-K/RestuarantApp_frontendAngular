import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  userDetails: any = {//object of objects
    1000: { uname: "Soja", phno: 7895643190, email: "soja@gmail.com", pswd: "soja" },
    1001: { uname: "Biju", phno: 9809592619, email: "biju@gmail.com", pswd: "biju", },
    1002: { uname: "Sriya", phno: 5675346617, email: "sriya@gmail.com", pswd: "sriya" },

  }


  constructor(private http: HttpClient) {



  }
    saveDetails() {

    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
  }


  signup(uname:any,phno: any, email: any, pswd: any) {
    const data = {

      uname,
      phno,
      email,
      pswd,
    }

    return this.http.post('http://localhost:3000/signup', data)//data is the variable created






  }


  login(email: any, pswd: any) {

    const data = {
      email,
      pswd
    }
    return this.http.post('http://localhost:3000/login', data)

  }
}