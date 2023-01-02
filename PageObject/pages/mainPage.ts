import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";


class mainPage extends BasePage {  
    analyticsField () { 
        return this.page.locator("//*[text()='Аналитика']")
    }
    gamesField () {
        return this.page.locator("//div[@class='sidebar-chunk menu-item dark ']//a[text()='Игры']")
    }
    
    darkMode () {
        return this.page.locator("//div[@class='content-block-data white']//span[text()='Включить темный режим']")
    }
    cryptocurrencyRates () {
        return this.page.locator("//div[@class='sidebar-chunk margin-bottom']//span[@style='border-right: 1px solid #aeaeae;background: #ececec;border-left: 1px solid #aeaeae;border-bottom: 0px;text-align: center;cursor: pointer;']")
    }
    search () {
        return this.page.locator("//input[@name='query-input']")
    }
    searchEnter () {
        return this.page.locator("//input[@name= 'search']")
    }
    contacts () {
        return this.page.locator("//div[@id='info-links']//a[text()='Контакты']")
    }
    forum () {
        return this.page.locator("//a[@href='http://forum.3dnews.ru']")
    }
}

export {mainPage} 
