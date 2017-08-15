import { EvcsPage } from './app.po';

describe('evcs App', () => {
  let page: EvcsPage;

  beforeEach(() => {
    page = new EvcsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
