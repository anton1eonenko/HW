import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { BasePage } from "../PageObjects/BasePage";
import { HomePage } from "../PageObjects/HomePage";
import { mainPage } from "../PageObjects/mainPage";
import { headersPage } from "../PageObjects/headersPage";
import { Baraholka } from "../PageObjects/baraholkaPage";
import { carsAndMotoPage } from "../PageObjects/carsAndMotoPage";
import { homeAppliances } from "../PageObjects/homeAppliancesPage";
import { computersAndNetworks } from "../PageObjects/computersAndNetworksPage";
import { payment } from "../PageObjects/paymenPage";
import { searchResults } from "../PageObjects/searchPage";

describe ('Search', () => {
    let driver: WebDriver
    beforeAll(async ()=> {
        const service = new chrome.ServiceBuilder(path)
         driver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    })
    afterAll (async () => {
        let Close = new BasePage(driver).CloseBrowser()
    } 
    )
    it ('Winter Tires', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage()

        let clickOnCarsAndMotoButton = await new mainPage(driver).carsAndMoto().click();

        let clickOnWinterTiresButton = await new carsAndMotoPage(driver).winterTires().click();

        let confirmation
        try {
        confirmation = await new headersPage(driver).TiresPage()
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
        } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })

    it ('Baraholka', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage()

        let clickOnBaraholkaButton = await new mainPage(driver).baraholka().click();

        let BusinessInvestmentCooperationButton = await new Baraholka(driver).businessInvestmentCooperation().click()

        let confirmation
            try {
        confirmation = await new headersPage(driver).baraholkaBusinessInvestmentCooperation()
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })

    it ('Washing Mashine', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage()

        let homeAppliancesButton = await new mainPage(driver).homeAppliances().click()

        let washingmachinesButton = await new homeAppliances(driver).washingMachines().click()

        let superPriceButton = await new homeAppliances(driver).superPrice().click()
        
        let confirmation
            try {
        confirmation = await new homeAppliances(driver).superPriceConfirmation()
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })

    it ('Safes', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage()
        
        let workAndOfficeButton = await new mainPage(driver).workAndOffice().click(); 

        let officeFurnitureButton = await new mainPage(driver).officeFurniture()
        const actions = driver.actions({ async: true });
        await actions.move({ origin: officeFurnitureButton }).perform();

        let safesButton = await new mainPage(driver).safes().click();

        let confirmation
            try {
        confirmation = await new headersPage(driver).safes()
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })

       it ('Payment', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage()
        
        let computersAndNetworksButton = await new mainPage(driver).computersAndNetworks().click();

        let RAMmemoryButton = await new computersAndNetworks(driver).RAMmemory().click();

        let itemButtom = await new computersAndNetworks(driver).item().click();

        let buyItemButton = await new computersAndNetworks(driver).buyItem().click();

        let paymentMethod = await new payment(driver).paymentMethod().click(); 
 
        let confirmation
            try {
        confirmation = await new payment(driver).error()
        await driver.wait(until.elementIsEnabled(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })
    it ('Search Samsung', async () => {
        driver.manage().setTimeouts({ implicit: 10000 });
        let OpenPage = await new HomePage(driver).visitPage();

        let SearchButton = await new mainPage(driver).Search()
        await SearchButton.click()
        await SearchButton.sendKeys("Samsung")

        const frame = await driver.findElement(By.xpath("//iframe[@class ='modal-iframe']"));
        await driver.switchTo().frame(frame);
        await driver.wait(until.elementsLocated(By.xpath("(//a[@class ='product__title-link'])[1]")))

        let samsungResultButton = await new searchResults(driver).samsungResult().click()

        let confirmation
            try {
        confirmation = await new headersPage(driver).searchExample()
        await driver.wait(until.elementIsEnabled(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
    }
    })
    })
