import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { ableToSwitchToFrame, elementIsDisabled } from "selenium-webdriver/lib/until";
import { createPublicKey } from "crypto";
import { send } from "process";
import { time } from "console";
import { searchData, searchSamsung } from "./auth.data";

describe ('SearchSmth', () => {
    it ('AirPods', async () => {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.manage().window().maximize()
    driver.get('https://catalog.onliner.by/'); 
    driver.manage().setTimeouts({implicit : 5000});

    let electronicButton = driver.findElement(By.xpath("//*[text()='Электроника']"))
    await electronicButton.click()
    driver.manage().setTimeouts({implicit : 5000});
    
    let mobilePhonesAndAccessoriesButton = driver.findElement(By.xpath("//*[contains(text(),'Мобильные телефоны и')]"))
    await mobilePhonesAndAccessoriesButton.click()
    driver.manage().setTimeouts({implicit : 5000});

    let headsetsButton = driver.findElement(By.xpath("//*[@id='container']/div/div/div/div/div[1]/div[4]/div/div[2]/div[1]/div/div[1]/div[2]/div/a[2]/span/span[2]"))
    await headsetsButton.click()
    driver.manage().setTimeouts({implicit : 5000});

    let headsetButton = driver.findElement(By.xpath("//*[text()='Наушники Apple AirPods 2 в зарядном футляре']"))
    await headsetButton.click()
    driver.manage().setTimeouts({implicit : 5000});
    let confirmation
        try {
     confirmation = await driver.findElement(By.xpath("//*[text()='беспроводные наушники с микрофоном, вставные, портативные, Bluetooth, быстрая зарядка, время работы 5 ч, с кейсом 24 ч']"))
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
    } catch (error) {
        console.log('Не удалось найти элемент')
    }
    driver.quit()
    })

    it ('Samsung Search', async () => {
        const service = new chrome.ServiceBuilder(path)
        let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        driver.manage().window().maximize()
        driver.get('https://catalog.onliner.by/'); 
        driver.manage().setTimeouts({implicit : 5000});

        let searchButton = await driver.findElement(By.xpath("//input[@class='fast-search__input']"))
        await searchButton.click()
        driver.manage().setTimeouts({implicit : 5000});

        await searchButton.sendKeys(searchSamsung)
        driver.manage().setTimeouts({implicit : 5000});

        let confirmation
            try {
        confirmation = await driver.findElement(By.xpath("//*[text()='Смартфон Samsung Galaxy S21 FE 5G SM-G990B/DS 6GB/128GB (белый)']"))
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
        }
        driver.quit()
        })
    
    it ('Trimmer', async () => {
        const service = new chrome.ServiceBuilder(path)
        let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        driver.manage().window().maximize()
        driver.get('https://catalog.onliner.by/'); 
        driver.manage().setTimeouts({implicit : 5000});
        
        let homeAndGardenButton = await driver.findElement(By.xpath("//span[contains(text(),'Дом и')]"));
        await homeAndGardenButton.click();
        driver.manage().setTimeouts({implicit : 5000});

        let trimmersButton = await driver.findElement(By.xpath("//div[@class='widget-item']//a[@href='https://catalog.onliner.by/trimmers?utm_source=ds_tile&utm_medium=trimmers']"))
        await trimmersButton.click();   
        driver.manage().setTimeouts({implicit : 15000});
        
        let nextPageButton = await driver.findElement(By.xpath("//div[@class='schema-pagination__dropdown']"))
        await nextPageButton.click(); 
        driver.manage().setTimeouts({implicit : 5000});

        let nextButton = await driver.findElement(By.xpath("//a[text()='15']"))
        await nextButton.click();
        driver.manage().setTimeouts({implicit : 5000});

        let trimmer = await driver.findElement(By.xpath("//*[text()='Триммер Deko DKTR12 (с 2-мя АКБ)']"))
        await trimmer.click();
        driver.manage().setTimeouts({implicit : 5000});

        let confirmation
            try {
        confirmation = await driver.findElement(By.xpath("//*[text()='аккумуляторный, 300 Вт, оснастка: металлический нож+пластиковый нож, ширина скашивания: 14 см, 12 В, аккумулятор в комплекте, 1.6 кг']"))
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
        }
        driver.quit()

        })

    it ('Car market', async () => {
        const service = new chrome.ServiceBuilder(path)
        let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        driver.manage().window().maximize()
        driver.get('https://catalog.onliner.by/'); 
        driver.manage().setTimeouts({implicit : 5000});

        let CarMarketButton = await driver.findElement(By.xpath("//a[@href='https://ab.onliner.by']//span[@class='b-main-navigation__text']"))
        await CarMarketButton.click();
        driver.manage().setTimeouts({implicit : 5000});

        let countrysButton = await driver.findElement(By.xpath("//*[@id='container']/div/div/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div/div[1]")); 
        await countrysButton.click();
        driver.manage().setTimeouts({implicit : 5000});
        let countryChoiсe = await driver.findElement(By.xpath("//*[text()='Беларусь']"));
        await countryChoiсe.click();
        driver.manage().setTimeouts({implicit : 5000});


        let areaButton = await driver.findElement(By.xpath("//*[@id='container']/div/div/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div"))
        await areaButton.click()
        driver.manage().setTimeouts({implicit : 10000});
        let areaChoice = await driver.findElement(By.xpath("//*[text()='Гомельская обл.']"))
        await areaChoice.click()
        driver.manage().setTimeouts({implicit : 5000});

        let cityButton = await driver.findElement(By.xpath("//*[@id='container']/div/div/div/div/div/div[2]/div/div/div[3]/div/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[3]/div/div[1]/div[2]"))
        await cityButton.click();
        driver.manage().setTimeouts({implicit : 10000});
        let cityChoice = await driver.findElement(By.xpath("//div[text()='Гомель']"));
        await cityChoice.click(); 
        driver.manage().setTimeouts({implicit : 5000});

        let confirmation
            try {
        confirmation = await driver.findElement(By.xpath("//h1[@class='vehicle-form__title vehicle-form__title_big-alter']"))
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
        }
        driver.quit()
        })


    it ('Laptops', async () => {
        const service = new chrome.ServiceBuilder(path)
        let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        driver.manage().window().maximize()
        driver.get('https://catalog.onliner.by/'); 
        driver.manage().setTimeouts({implicit : 5000});
        
        let searchButton = await driver.findElement(By.xpath("//input[@class='fast-search__input']"));
        await searchButton.click();
        driver.manage().setTimeouts({implicit : 5000});
    
        await searchButton.sendKeys(searchData);
        driver.manage().setTimeouts({implicit : 10000});

        let LaptopsButton = await driver.findElement(By.xpath("//*[@id='search-page']/div[2]/ul/li[1]/div/div"))
        await LaptopsButton.click()
        driver.manage().setTimeouts({implicit : 5000});
    
        let confirmation
            try {
        confirmation = await driver.findElement(By.xpath("//*[contains(text(),'Ноутбук')]"))
        await driver.wait(until.elementIsVisible(confirmation))
        console.log('Успешно')
            } catch (error) {
        console.log('Не удалось найти элемент')
        }
        driver.quit()
        
        })
})