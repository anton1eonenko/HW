import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class homeAppliances extends BasePage {
     washingMachines () {
        return this.driver.findElement(By.xpath("//a[@href='https://catalog.onliner.by/washingmachine?in_stock=1']"))
    }
    superPrice () {
        return this.driver.findElement(By.xpath("//div[@class='schema-filter__bonus-list']"))
    }
    superPriceConfirmation () {
        return this.driver.findElement(By.xpath("//div[@class='schema-tags']//span[contains(text(), 'Суперцена')]"))
    }
    

}

export {homeAppliances}