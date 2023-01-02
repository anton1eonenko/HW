import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class carsAndMotoPage extends BasePage {
     winterTires () {
        return this.driver.findElement(By.xpath("//div[contains(text(),'Зимние шины')]"))
        }
} 

export {carsAndMotoPage}