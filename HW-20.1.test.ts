import { Browser, Builder, By, until, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import { path } from "chromedriver";
import {
  ableToSwitchToFrame,
  elementIsDisabled,
} from "selenium-webdriver/lib/until";
import { createPublicKey } from "crypto";
import { send } from "process";
import { password, login } from "./jest_tests/auth.data";
import { time } from "console";

async function FindAirPods() {
  const service = new chrome.ServiceBuilder(path);
  let driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  driver.manage().window().maximize();
  driver.get("https://catalog.onliner.by/");
  driver.manage().setTimeouts({ implicit: 5000 });

  let electronicButton = driver.findElement(
    By.xpath("//*[text()='Электроника']")
  );
  await electronicButton.click();
  driver.manage().setTimeouts({ implicit: 5000 });

  let mobilePhonesAndAccessoriesButton = driver.findElement(
    By.xpath("//*[contains(text(),'Мобильные телефоны и')]")
  );
  await mobilePhonesAndAccessoriesButton.click();
  driver.manage().setTimeouts({ implicit: 5000 });

  let headsetsButton = driver.findElement(
    By.xpath(
      "//*[@id='container']/div/div/div/div/div[1]/div[4]/div/div[2]/div[1]/div/div[1]/div[2]/div/a[2]/span/span[2]"
    )
  );
  await headsetsButton.click();
  driver.manage().setTimeouts({ implicit: 5000 });

  let headsetButton = driver.findElement(
    By.xpath("//*[text()='Наушники Apple AirPods 2 в зарядном футляре']")
  );
  await headsetButton.click();
  driver.manage().setTimeouts({ implicit: 5000 });
  try {
    const confirmation = await driver.findElement(
      By.xpath(
        "//*[text()='беспроводные наушники с микрофоном, вставные, портативные, Bluetooth, быстрая зарядка, время работы 5 ч, с кейсом 24 ч']"
      )
    );
    await driver.wait(until.elementIsVisible(confirmation));
    console.log("Успешно");
  } catch (error) {
    console.log("Не удалось найти элемент");
  }
  // driver.quit()
}
FindAirPods();
