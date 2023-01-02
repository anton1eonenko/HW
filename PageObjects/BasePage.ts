import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import { headersPage } from "./headersPage";

class BasePage {
    constructor (protected driver: WebDriver) {}

    async getCurrentUrlValue () {
        return this.driver.getCurrentUrl();
    }

    async CloseBrowser () {
        return await this.driver.quit();
    }
}

export {BasePage}