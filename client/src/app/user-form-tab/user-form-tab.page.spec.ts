import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

import { UserFormTabPage } from './user-form-tab.page';

describe('UserFormTabPage', () => {
  let component: UserFormTabPage;
  let fixture: ComponentFixture<UserFormTabPage>;

  let mockUserService = {
    createUser: () => of()
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormTabPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call the userService.createUser method when the form is valid and is submitted', () => {
    const userServiceSpy = spyOn(mockUserService, 'createUser').and.callFake(() => of());

    component.userForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      jobTitle: 'Software Engineer',
      phone: '555-555-5555',
    })

    component.onSubmit();

    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should not call the userService.createUser method when the form is valid and is submitted', () => {
    const userServiceSpy = spyOn(mockUserService, 'createUser').and.callFake(() => of());

    component.userForm.patchValue({
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      jobTitle: 'Software Engineer',
      phone: '555-555-5555',
    })

    component.onSubmit();

    expect(userServiceSpy).toHaveBeenCalledTimes(0);
  });

});
