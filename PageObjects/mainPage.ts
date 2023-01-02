import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "./BasePage";
import { HomePage  } from "./HomePage";

class mainPage extends BasePage {
        carsAndMoto () {
    return this.driver.findElement(By.xpath("//span[contains(text(),'Авто и')]"))
    }
        baraholka () {
        return this.driver.findElement(By.xpath("//a[@href='https://baraholka.onliner.by/']"))
    }
        homeAppliances () {
        return this.driver.findElement(By.xpath("//*[text()='Бытовая техника']"))
    }
        workAndOffice () {
        return this.driver.findElement(By.xpath("//span[contains(text(),'Работа')]")) 
    }
        computersAndNetworks () {
        return this.driver.findElement(By.xpath("//span[contains(text(),'Компьютеры и')]"));
    }

        officeFurniture () {
        return this.driver.findElement(By.xpath("//*[text()=' Офисная мебель ']")) 
    }
        safes () {
        return this.driver.findElement(By.xpath("//a[@href='https://catalog.onliner.by/furnituresafes']//span[contains(text(),'Сейфы')]"))
    }
        Search () {
            return this.driver.findElement(By.xpath("//input[@class='fast-search__input']"))
        }
}

export {mainPage}