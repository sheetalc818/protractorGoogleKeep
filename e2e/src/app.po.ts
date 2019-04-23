import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  takeNote() {
    //return element(by.xpath('//android.widget.TextView[@text="Take a note…"]')).click();
    //return element(by.id('com.google.android.keep:id/new_note_button')).click();
    //return element(by.buttonText('Take a note…')).click();
    return element(by.id('com.google.android.keep:id/open_search_bar_text_view')).click();
  }

  // fs = require('fs');
  // writeScreenShot(data, screenshot) 
  // {
  //   var stream = this.fs.createWriteStream(screenshot);
  //   stream.write(new Buffer(data, 'base64'));
  //   stream.end();
  // }

  // checkBox(){
  //   return element(by.id('com.google.android.keep:id/new_list_button')).click();
  // }
  // Ch(){
  // return element(by.xpath("//android.widget.LinearLayout[@index='1']")).click();
  // }
}
