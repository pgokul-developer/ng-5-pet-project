import { AppPage } from './app.po';

describe('pet-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToHome();
  });

  /*it('should display welcome message', () => {
    page.navigateToHome();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });*/

  it('should have a login component', () => {
    let loginElement = page.getLoginComponent();
    expect(loginElement).toBeTruthy('login component is not found');
  });


});
