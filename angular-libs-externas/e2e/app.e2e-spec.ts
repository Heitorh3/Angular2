import { AngularLibsExternasPage } from './app.po';

describe('angular-libs-externas App', () => {
  let page: AngularLibsExternasPage;

  beforeEach(() => {
    page = new AngularLibsExternasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
