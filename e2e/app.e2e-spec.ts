import { AngularmaterialPage } from './app.po';

describe('angularmaterial App', function() {
  let page: AngularmaterialPage;

  beforeEach(() => {
    page = new AngularmaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
