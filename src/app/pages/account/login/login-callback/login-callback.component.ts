import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  public user:any;

  constructor(private authService:AuthService,private router: Router) {

    authService.endSigninMainWindow().then(user=>{
      this.user = user;
      this.router.navigate(['/home']);
    });

   }

  ngOnInit() {
  }

}
