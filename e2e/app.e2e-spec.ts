import { MarvelApiPage } from './app.po';

describe('marvel-api App', function() {
  let page: MarvelApiPage;

  beforeEach(() => {
    page = new MarvelApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
