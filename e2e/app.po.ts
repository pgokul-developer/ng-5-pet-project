import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLoginComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }

  getLoginForm(loginElement: ElementFinder) {

  }

}
