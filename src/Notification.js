const { TopMenu } = require("./Menu");
import { expect } from '@playwright/test';


class NotificationChecker {
    constructor(page) {
        this.page = page;

        this.topmenu = new TopMenu(page)

        this.message = page.locator('.message-text').nth(0)

        this.time = page.locator('.text-time').nth(0)
    }

    async checkNotificationFromMenuBar(candidate, job){
        let { firstName, lastName } = candidate
        let { title } = job
        this.topmenu.clickNotification()
        var notification = await (this.message).textContent();
        expect.soft(notification.replace(/\s+/g, ' ').trim()).toEqual(`${firstName} ${lastName} has applied for ${title}.`)
    }
}
module.exports = { NotificationChecker };