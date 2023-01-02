import { expect, Locator, Page } from '@playwright/test';
import { BrowserHelper } from '../helpers/browser';
class BasePage {
    readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async Open() {
     return this.page.goto('https://3dnews.ru/');
  }
  async Close () {
    return this.page.close()
  }
} 

export {BasePage}