import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class Baraholka extends BasePage {
    static businessInvestmentCooperation: any;
    businessInvestmentCooperation () {
        return this.driver.findElement(By.xpath("//*[text()='Бизнес. Инвестиции. Сотрудничество']"))
    }

}

export {Baraholka}