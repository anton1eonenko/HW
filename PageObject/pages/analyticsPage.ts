import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";

class analyticsPage extends BasePage{
    review1 () {
        return this.page.locator("((//div[@class='content-block-data white']//td))[2]");
    }

}

export {analyticsPage}