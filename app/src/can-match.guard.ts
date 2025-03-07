import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  let authService = inject(AuthService);
  if (authService.role === 'admin') {
    return true;
  }
  return false;
};
