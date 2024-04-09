import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin.service';

export function asyncValidator(adminService: AdminService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return adminService.checkEmailAvailability(control.value).pipe(
      map(isAvailable => {
        return isAvailable ? null : { emailNotAvailable: true };
      })
    );
  };
}


