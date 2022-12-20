import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome'; 
import { path } from "chromedriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";


// async function XPlane12 () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/'); 
//     console.log(await driver.findElement(By.xpath("//div[text()='X-Plane 12']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']/a[1]/div[3]/div[2]/div")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='responsive_page_template_content']/div[1]/div[2]/div[18][div]//*[text()='$27.99'][1]")).getText())
//     driver.quit()
// }
// XPlane12()

// async function HandymanCorporationPrologue () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/'); 
//     console.log(await driver.findElement(By.xpath("//div[text()='Handyman Corporation: Prologue']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']/a[2]/div[3]/div[2]/div")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[2]//div//div//div[@class= 'discount_final_price']")).getText())
//     driver.quit()
// }
// HandymanCorporationPrologue()


// async function BLACKTAIL () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='BLACKTAIL']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[3]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[3]//div//div/div[@class='discount_final_price']")).getText())
// }
// BLACKTAIL()

// async function BuriedbornesDungeonRPG
// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='Buriedbornes - Dungeon RPG']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[4]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[4]//div//div[@class='discount_prices']")).getText())
// }
// BuriedbornesDungeonRPG()

// async function PotionCraftAlchemistSimulator
// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='Potion Craft: Alchemist Simulator']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[5]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[5]//div//div//div[@class][2]")).getText())
// }
// PotionCraftAlchemistSimulator()

// async function STALCRAFT
// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='STALCRAFT']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[6]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[6]//div//div[@class='discount_prices']")).getText())
// }
// STALCRAFT()

// async function ChooChooCharles

// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='Choo-Choo Charles']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[7]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[7]//div//div[@class='discount_prices']")).getText())
// }
// ChooChooCharles()

// async function KnightsofHonorIISovereign

// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='Knights of Honor II: Sovereign']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[8]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[8]//div//div[@class='discount_prices']")).getText())
// }
// KnightsofHonorIISovereign()

// async function TheCrackpetShowPrologue

// () {
//     const service = new chrome.ServiceBuilder(path)
//     let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

//     driver.manage().window().maximize()
//     driver.get('https://store.steampowered.com/');
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='The Crackpet Show: Prologue']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[9]//div//div/div[@class = 'tab_item_top_tags']")).getText())
//     console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[9]//div//div[@class='discount_prices']")).getText())
// }
// TheCrackpetShowPrologue()

async function Warhammer40000arktide

() {
    const service = new chrome.ServiceBuilder(path)
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize()
    driver.get('https://store.steampowered.com/');
    console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//div[text()='Warhammer 40,000: Darktide']")).getText())
    console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[10]//div//div/div[@class = 'tab_item_top_tags']")).getText())
    console.log(await driver.findElement(By.xpath("//*[@id='tab_newreleases_content']//a[10]//div//div[@class='discount_prices']")).getText())
}
Warhammer40000arktide()







 
