import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm!: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.forbiddenNames.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    this.projectForm.reset();
  }

  // forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return { projectNameIsForbidden: true };
  //   }
  //   return null;
  // }

  forbiddenNames(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectNameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  changeStatus(e: any) {
    this.projectForm.get('projectStatus')?.setValue(e.target.value);
    console.log(e.target.value);
  }
}
