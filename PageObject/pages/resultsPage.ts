import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";
import { analyticsPage } from "./analyticsPage";

class resultsPage extends BasePage {
  Analytics_Test() {
    return this.page.locator("//h1");
  }
  Games_Test() {
    return this.page.locator("//h1");
  }
   Search_crypto_Test () {
    return this.page.waitForURL("https://3dnews.ru/search/#query=%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0&sdate=&edate=&action=search&page=10");
  }
  contacts_Test () {
    return this.page.locator("//td[@class='section-title']")
  }
  Forum_Authorization_Positive () {
    return this.page.locator("//td[@class='alt1']//strong");
  }
  Forum_Authorization_Negative () {
    return this.page.locator("//td[@class='tcat']"); 
  }
}

export { resultsPage };
