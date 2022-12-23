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

async function Login() {
  const service = new chrome.ServiceBuilder(path);
  let driver: WebDriver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeService(service)
    .build();
  driver.manage().window().maximize();
  driver.get("https://catalog.onliner.by/");
  driver.manage().setTimeouts({ implicit: 5000 });

  let clickOnLogin = driver.findElement(By.xpath("//*[text()='Вход']"));
  await clickOnLogin.click();
  await driver.manage().setTimeouts({ implicit: 5000 });

  let loginField = driver.findElement(
    By.xpath("//input[@placeholder = 'Ник или e-mail']")
  );
  await loginField.clear();
  await loginField.sendKeys(login);
  await driver.manage().setTimeouts({ implicit: 5000 });

  let passwordField = driver.findElement(
    By.xpath("//input[@type='password'] ")
  );
  await passwordField.clear();
  await passwordField.sendKeys(password);
  await driver.manage().setTimeouts({ implicit: 5000 });

  let loginButton = driver.findElement(
    By.xpath(
      "//button[@class='auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full']"
    )
  );
  await loginButton.click();
  await driver.manage().setTimeouts({ implicit: 5000 });

  await driver.wait;

  // driver.quit()
}
Login();
