import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  registerForm = this.fb.group({//group
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],//arrray
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],//array
    phno: ['', [Validators.required, Validators.pattern('[0-9]*')]],//array
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private fb: FormBuilder, private ds: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {  //privides the validation  ie validation for submit button

      var uname = this.registerForm.value.uname;
      var phno = this.registerForm.value.phno;
      var email = this.registerForm.value.email;
      var pswd = this.registerForm.value.pswd;


      // var userDetails=this.ds.userDetails;
      const result = this.ds.signup(uname, phno, email, pswd)
        .subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('')

        },
          result => {
            alert(result.error.message);
            this.router.navigateByUrl('signup')


          }
        )

    }


  }
}
