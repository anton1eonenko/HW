import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";



async function BrokenImage () {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://the-internet.herokuapp.com/broken_images'); 
    console.log(await driver.findElement(By.xpath("//img[2]")).getAttribute('src'))
    console.log(await driver.findElement(By.xpath("//img[3]")).getAttribute('src'))
    driver.quit()
}
BrokenImage()

async function Checkboxes () {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://the-internet.herokuapp.com/checkboxes'); 
    console.log(await driver.findElement(By.xpath("//div[@id='flash-messages']")).getAttribute('id'))
    console.log(await driver.findElement(By.xpath("//*[@id='checkboxes']")).getText())
    driver.quit()
}
Checkboxes()

async function ExitIntent () {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://the-internet.herokuapp.com/exit_intent'); 
    console.log(await driver.findElement(By.xpath("//img[@style]")).getAttribute('style'))
    console.log(await driver.findElement(By.xpath("//*[contains(text(),'Mouse')] ")).getText())
    driver.quit()
}
ExitIntent()

async function Inputs () {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://the-internet.herokuapp.com/inputs'); 
    console.log(await driver.findElement(By.xpath("//input")).getAttribute('type'))
    console.log(await driver.findElement(By.xpath("//p")).getText())
    driver.quit()
}
Inputs()

async function ShiftingContent () {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://the-internet.herokuapp.com/shifting_content'); 
    console.log(await driver.findElement(By.xpath("//*[text()='Example 2: An image']")).getAttribute('href'))
    console.log(await driver.findElement(By.xpath("//p")).getText())
    driver.quit()
}
ShiftingContent()


