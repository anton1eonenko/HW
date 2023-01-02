import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { BasePage } from "./BasePage";

class HomePage extends BasePage {
    private readonly url: string; 

    constructor (driver: WebDriver) {
        super (driver);
        this.url = "https://catalog.onliner.by/";
    }

   async visitPage () {
    await this.driver.manage().window().maximize();
    return await this.driver.get(this.url);

   }
}
export {HomePage}
