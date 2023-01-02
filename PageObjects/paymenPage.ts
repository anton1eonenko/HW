import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class payment extends BasePage{
    paymentMethod () {
        return this.driver.findElement(By.xpath("//button[@class='button-style button-style_primary button-style_base cart-form__button cart-form__button_responsive']"))
    }
    error () {
        return this.driver.findElement(By.xpath("//*[text()='Подтвердите номер телефона']"))
    }
}

export {payment}