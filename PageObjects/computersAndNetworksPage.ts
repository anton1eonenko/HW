import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class computersAndNetworks extends BasePage {
        RAMmemory () {
        return this.driver.findElement(By.xpath("//*[text()='Оперативная память']")); 
    }
        item () {
        return this.driver.findElement(By.xpath("//*[text()='Оперативная память Kingston FURY Beast 2x8GB DDR4 PC4-28800 KF436C17BBK2/16']"));
    }
        buyItem () {
        return this.driver.findElement(By.xpath("//div[@class='product-aside__offers-item product-aside__offers-item_primary']//a[text()='Купить сейчас']"));
    }

}

export {computersAndNetworks}