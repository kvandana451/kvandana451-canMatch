import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string = '';
  constructor(private router: Router) {}
  login(role: string) {
    this.role = role;
    localStorage.setItem('role', JSON.stringify(role));
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
