import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [AuthService],
})
export class SignUpComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  submit(user) {
    this.authService.signUp(user).subscribe(
      () => {
        this.snackBar.open('User successfully created!:)', 'Close', {
          duration: 5000,
        });
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        this.snackBar.open(err.error, 'Close', {
          duration: 5000,
        });
      }
    );
  }
}
