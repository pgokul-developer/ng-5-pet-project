import {browser, by, element, ElementFinder} from 'protractor';

export class LoginPage {

  navigateToLogin() {
    return browser.get('/login');
  }

  getLoginForm(): ElementFinder {
    return element(by.css('form'));
  }

  getEmailInputField(): ElementFinder {
    return element(by.css("input[formControlName=email"));
  }
}
