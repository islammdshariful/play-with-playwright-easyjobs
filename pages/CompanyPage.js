const {expect} = require('@playwright/test');

class CompanyPage{
    constructor(page){
        this.page = page;
        this.headerCompanyLogo = page.locator(".logo__company-name");
        this.bannerImage = page.locator(".banner-image");
        this.companyLogo = page.locator(".company-logo");
        this.companyName = page.locator(".company-name");
        this.companyLocation = page.locator(".company-location");
        this.companyWebsite = page.locator(".primary-button");
        this.companyInfo = page.locator(".company-block-info");
        this.openJobPositionTitle = page.locator(".content-card__title__text.mb-2");
        this.jobSearch = page.locator('[placeholder="Job Title"]');
        this.jobCategory = page.locator('[name="category"]');
        this.jobFilterSubmitButton = page.locator(".semi-button-warning");
        this.jobFilterResetButton = page.locator(".semi-button-danger");
        this.noJobPositionText = page.locator(".job-header__title");
        this.lifeAtTitle = page.locator(".content-card__title__text").nth(1);
        this.featureImageOne = page.locator("//div[@class='feature-image-box']/div/div[1]/a");
        this.featureImageTwo = page.locator("//div[@class='col-md-6']/div[1]/div[1]/a");
        this.featureImageThree = page.locator("//div[@class='col-md-6']/div[1]/div[2]/a");
        this.featureImageFour = page.locator("//div[@class='col-md-6']/div[2]/div[1]/a");
        this.featureImageFive = page.locator("//div[@class='col-md-6']/div[2]/div[2]/a");
    }

    async NoJobOnOpenJobPositions(){
        const q = 'QA Automation Engineer';
        await expect(this.openJobPositionTitle).toContainText('Open Job Positions');
        await expect(this.noJobPositionText).toContainText('No open job positions');
        await this.jobSearch.click();
        await this.jobSearch.fill(q);
        await this.jobFilterResetButton.click();
        await this.jobSearch.fill(q);
        await this.jobFilterSubmitButton.click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.jobSearch).toHaveAttribute('value', q);
    }
}
module.exports = {CompanyPage};