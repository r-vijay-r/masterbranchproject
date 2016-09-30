import { MasterbranchprojectPage } from './app.po';

describe('masterbranchproject App', function() {
  let page: MasterbranchprojectPage;

  beforeEach(() => {
    page = new MasterbranchprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
