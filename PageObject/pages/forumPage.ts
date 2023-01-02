import { Page } from "@playwright/test";
import { BasePage } from "../../framework/base/basePage";

class forumPage extends BasePage {
    loginField () {
        return this.page.locator("//tr//input[@name='vb_login_username']")
    }
    passwordField () {
        return this.page.locator("//tr//input[@type='password']")
    }
    input () {
        return this.page.locator("//input[@value='Вход']")
    }
}



let data_for_authorization = {
    true_Login: 'Антон123', 
    true_Password: '123456789', 

    false_Login: 'Антон1234',  
    false_Password: '12345678'
}

export {forumPage, data_for_authorization}