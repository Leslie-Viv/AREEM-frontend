import { CanActivateFn } from '@angular/router';

export const defaultGuard: CanActivateFn = (route, state) => {
  return true;
};
