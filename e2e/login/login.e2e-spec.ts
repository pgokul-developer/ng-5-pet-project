import {LoginPage} from './login.po';

describe('Login Page', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateToLogin();
  });

  it('should have login form', () => {
    let loginForm = loginPage.getLoginForm();
    expect(loginForm).toBeTruthy('login form is not found');

  });
});
