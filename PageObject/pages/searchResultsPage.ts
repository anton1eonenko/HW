import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";

class searchResults extends BasePage {
    pageNumber10 () {
        return this.page.locator("((//span[@class='search-button perpage-button first-page-line spg-0 pl-9']))[1]");
        
    }
}

export {searchResults}