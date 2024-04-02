import { CanActivateFn } from '@angular/router';

export const finanzasGuard: CanActivateFn = (route, state) => {
  return true;
};
