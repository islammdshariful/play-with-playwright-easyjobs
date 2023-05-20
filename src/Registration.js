const { expect } = require("../playwright.config");

class Registration{
    constructor(page){
        this.page = page;
        this.firstName = page.locator("[placeholder='Enter first name']");
        this.lastName = page.locator("[placeholder='Enter last name']");
        this.email = page.locator("[type='email']");
        this.password = page.locator("[placeholder='Password']");
        this.confirmPassword = page.locator("[placeholder='Re-Type Password']");
        this.singupButton = page.locator("[type='submit']");
        this.signinButton = page.locator(".color-primary")
    }

    async goTo(){
        await this.page.goto(`/registration`);
    }

    async goToSigninPage(){
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
        await expect(page).toHaveTitle('easy.jobs | Login')
    }

    async validRegister(user){
        await this.firstName.type(user.first_name);
        await this.lastName.type(user.last_name);
        await this.email.type(user.email);
        await this.password.type(user.password);
        await this.confirmPassword.type(user.password);
        // await this.singupButton.click()
    }
}

module.exports = {Registration};