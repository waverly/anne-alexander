import { AlealiPage } from './app.po';

describe('aleali App', function() {
  let page: AlealiPage;

  beforeEach(() => {
    page = new AlealiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
