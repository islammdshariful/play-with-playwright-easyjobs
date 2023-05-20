const {expect} = require('@playwright/test');

class PopUp{
    constructor(page){
        // Information page locators
        this.page = page;
        this.title = page.locator('.dg-title');
        this.content = page.locator('.dg-content');
        this.cancel = page.locator('.dg-btn--cancel');
        this.ok = page.locator('.dg-btn--ok');
    }

    async clickCancel(){
        await this.cancel.click();
    }

    async clickOk(){
        await this.ok.click();
    }

    async checkContent(title, content){
        await expect(this.title).toContainText(title);
        await expect(this.content).toContainText(content);
    }
}

class ToastMessage{
    constructor(page){
        this.page = page;
        this.message = page.locator('.toast-message');
        this.text = page.locator('.toast-text');
    }

    async hasMessage(message){
        await expect.soft(this.message).toContainText(message);
        await this.message.click();
    }

    async hasText(message){
        await expect.soft(this.text).toContainText(message);
        await this.text.click();
    }
}

module.exports = {PopUp, ToastMessage};