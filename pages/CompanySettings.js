const {expect} = require('@playwright/test');
const { ToastMessage } = require("./PopUp");
const { LeftMenu } = require("./Menu")

class CompanySettings{
    constructor(page){
        this.page = page;

        // Left Panel
        this.basicInformation = page.locator("[href='/company/setting/']").nth(1);

        this.photoAndColor = page.locator("[href='/company/setting/photo']");

        this.templates = page.locator("[href='/company/setting/templates']");

        this.manageUsers = page.locator("[href='/company/setting/user']")

        this.customDomain = page.locator("[href='/company/setting/custom-domain']");

        this.pipelineSetup = page.locator("[href='/company/setting/pipeline']");

        this.emailSetup = page.locator("[href='/company/setting/email']");

        this.integrations = page.locator("[href='/company/setting/integrations']");

        this.aiSetup = page.locator("[href='/company/setting/ai-setup']");

        this.verification = page.locator("[href='/company/setting/verification']").nth(1);

        this.candidateApplySetting= page.locator("[href='/company/setting/apply-setting']");

        this.categoriesAndSkills = page.locator("[href='/company/setting/category-skill']");

        this.activityLog = page.locator("[href='/company/setting/activity-log']");

        this.deleteCompany = page.locator(".danger-button");

        // Basic Information Page
        this.companyName = page.locator('[placeholder="Your Company Name"]');

        this.companyUsername = page.locator('[placeholder="Your User Name / Company*"]');

        this.mobileNumber = page.locator('[placeholder="0123456789"]');

        this.industry = page.locator('#company_types');

        this.country = page.locator('#country');

        this.state = page.locator('#state');

        this.city = page.locator('#city');

        this.postalCode = page.locator('[placeholder="1234"]');

        this.timeZone = page.locator('#salary_type');

        this.language = page.locator('#lang_choose');

        this.website = page.locator('#website');

        this.numberOfEmployeeCount1 = page.locator('#employee-count1');

        this.numberOfEmployeeCount2 = page.locator('##employee-count2');

        this.numberOfEmployeeCount3 = page.locator('#employee-count3');

        this.numberOfEmployeeCount4 = page.locator('##employee-count4');

        this.writeDescription = page.locator('[data-placeholder="Write description here."]');

        this.companyBenefits = page.locator('[data-placeholder="Write company benefit here."]');

        this.showJobFilter = page.locator("//span[normalize-space()='Show job filter on company page']");

        this.searchEngineindex = page.locator("//span[normalize-space()='Search engine index']");

        this.saveAndContinue = page.locator("button[type='submit']");

        this.toastMessage = new ToastMessage(page);
        this.menu = new LeftMenu(page)
    }
}
module.exports = {CompanySettings};