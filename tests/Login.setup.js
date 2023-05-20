//@ts-check
import { users } from '../utils/credentials';
import { LoginPage } from '../src/Login';
const { test } = require('@playwright/test');
import { STORAGE_STATE } from '../playwright.config'

let page
let loginPage;
let mainUser;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page)
    mainUser = users().users.main;
});

test('Login to account', async () => {
    // Visiting Login page
    await loginPage.goTo();
    // Make a valid login
    await loginPage.validLogin(mainUser)
    await page.waitForURL('https://app.easy.jobs/dashboard')
    await page.context().storageState({STORAGE_STATE})
});