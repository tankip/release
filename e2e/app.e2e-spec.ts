import { ReleasePage } from './app.po';

describe('release App', () => {
  let page: ReleasePage;

  beforeEach(() => {
    page = new ReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
