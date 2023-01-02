import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class searchResults extends BasePage{
    samsungResult () {
        return this.driver.findElement(By.xpath("(//div[@class='result__wrapper'])[1]"))
    }
}

export {searchResults}