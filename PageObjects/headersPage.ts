import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class headersPage extends BasePage {
    static driver: any;
        TiresPage () {
        return this.driver.findElement(By.tagName("h1"))
    }
        baraholkaBusinessInvestmentCooperation () {
        return this.driver.findElement(By.xpath("//*[text()='Бизнес. Инвестиции. Сотрудничество']"))
    }
        washingMashineExample () {
        return this.driver.findElement(By.tagName("h1"))
    }
        safes () {
        return this.driver.findElement(By.tagName("h1"))
    }

        searchExample () {
            return this.driver.findElement(By.tagName("h1"))
        }

}

export {headersPage}