import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  static asyncInvalidProjectName(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
