import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";

class gamesPage extends BasePage {
    public gameAField () {
        return this.page.locator("//div[@class='sidebar-chunk submenu']//a[@href='/games/a']")
    }
    public gameAFieldReviewNumber2 () {
        return this.page.locator("//table[@class='nomargins']//a[@href='/1070993/as-dusk-falls-review']")
    }
}


export {gamesPage}