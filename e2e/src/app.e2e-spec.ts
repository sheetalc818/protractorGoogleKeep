import { AppPage } from './app.po';
import { browser, by } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });

  it('Should Click on "Take A note..."', () => {
    //page.navigateTo();
    expect(page.takeNote());
    browser.sleep(1000);
    // expect(page.checkBox());
    // browser.sleep(1000);
    // expect(page.Ch());
 });

//  // within a test:
//   browser.takeScreenshot().then(function (png){
//     expect(page.writeScreenShot(png, 'exception.png'));
//   });
});
