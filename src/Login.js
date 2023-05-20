class LoginPage{
    constructor(page){
        this.page = page;
        this.email= page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.signinButton = page.locator("[type='submit']");
        this.forgotPassword = page.locator(".forget-button");
        this.signupButton = page.locator(".color-primary");
    }

    async goTo(){
        await this.page.goto(`/login`);
        await this.page.waitForLoadState('networkidle');
    }

    async goToSignunPage(){
        await this.signupButton.click();
        await this.page.waitForLoadState('networkidle');
        await expect(page).toHaveTitle('easy.jobs | Registration')
    }

    async validLogin(user){
        await this.email.type(user.email);
        await this.password.type(user.password);
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {LoginPage};