import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {User} from '../../../shared/model/user';
import {Router} from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let email;
  let password;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

/*  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });

    // create component and fixture to test
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from fixture
    component = fixture.componentInstance;
    component.ngOnInit();
    email = component.form.controls['email'];
    password = component.form.controls['password'];
  });

  it('form valid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field should be invalid initially', () => {
    expect(email.valid).toBeFalsy();
  });

  it('password field should be invalid initially', () => {
    expect(password.valid).toBeFalsy();
  });

  it('email field should have required errors initially', () => {
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field should have required errors initially', () => {
    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field should have pattern validation error when email address without @ is entered', () => {
    email.setValue("test");
    let errors = {};
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('email field should be valid when an email address with an @ is entered', () => {
    email.setValue("test@gmail.com");
    expect(email.valid).toBeTruthy();
  });

  it('password field should have minLength error when password less than 8 length is entered', () => {
    password.setValue("12345");
    let errors = {};
    errors = password.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('password field should have be valid when password greater than 8 length is entered', () => {
    password.setValue("12345678");
    let errors = {};
    errors = password.errors || {};
    expect(errors['minlength']).toBeFalsy('minLength error');
    expect(password.valid).toBeTruthy('password is not valid');
  });

  it('submitting login form emits a user correctly', () => {
    const emailInput: string = 'test@123.com';
    const passwordInput: string = '12345678';
    expect(component.form.valid).toBeFalsy('form not invalid initially');
    email.setValue(emailInput);
    password.setValue(passwordInput);
    expect(component.form.valid).toBeTruthy('form not valid after correct user input');

    let user: User;
    // Subscribe to the Observable (Output - event emitter) and store the user in a local variable;
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.login();

    // Now check to make sure the emitted value is correct
    expect(user.email).toBe(emailInput, 'emitted User email not same as input');
    expect(user.password).toBe(passwordInput, 'emitted User password not same as input');
  })

});
