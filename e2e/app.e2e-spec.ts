import { AngularCruPage } from './app.po';

describe('angular-cru App', function() {
  let page: AngularCruPage;

  beforeEach(() => {
    page = new AngularCruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
