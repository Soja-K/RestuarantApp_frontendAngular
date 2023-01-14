import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({//group
   
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],//array
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private fb: FormBuilder,private ds: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
 
    if (this.loginForm.valid) {
      var email = this.loginForm.value.email;
      var pswd = this.loginForm.value.pswd;
      const result = this.ds.login(email, pswd)
        .subscribe((result: any) => {
          localStorage.setItem('currentemail',JSON.stringify(result.currentemail))

          alert(result.message)
          this.router.navigateByUrl('home')
  
        },
        result=>{
          alert(result.error.message)
        }
        )
      
  
  
  
    }
  
  
  
  
  
  
  
  
  
  }
}
