import { User, UserService } from './../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BehaviorSubject, finalize, take } from 'rxjs';

@Component({
  selector: 'app-user-form-tab',
  templateUrl: './user-form-tab.page.html',
  styleUrls: ['./user-form-tab.page.scss'],
})
export class UserFormTabPage {
  public userForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required,],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    jobTitle: ['', Validators.required],
    phone: ['', Validators.required],
    photo: [''],
  });

  public photo$$ = new BehaviorSubject<string | undefined>('');

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  public onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    this.userService.createUser(this.userForm.value).pipe(
      take(1),
      finalize(() => {
        this.userForm.reset();
        this.photo$$.next(undefined);
      })
    ).subscribe();
  }

  public async uploadPhoto(): Promise<void> {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    this.photo$$.next(photo.webPath);

    this.userForm.patchValue({ photo: photo.webPath });
  }

}
