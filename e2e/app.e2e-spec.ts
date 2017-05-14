import { EstebanKeepPage } from './app.po';

describe('esteban-keep App', () => {
  let page: EstebanKeepPage;

  beforeEach(() => {
    page = new EstebanKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
