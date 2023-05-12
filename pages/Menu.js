class LeftMenu {
    constructor(page) {
        this.page = page;
        this.dashboard = page.locator("text=Dashboard");
        this.jobs = page.locator("text=Jobs").nth(0);
        this.candidates = page.locator("text=Candidates").nth(0);
        this.messages = page.locator("text=Messages");
        this.settings = page.locator("text=Settings");
        this.evaluation = page.locator("text=Evaluation");
        this.questionSet = page.locator("text=Question Set");
        this.assessment = page.locator("text=Assessment");
        this.logout = page.locator('[href="/logout"]').nth(0)
    }
    async doLogout() {
        await this.logout.click();
    }

    async goToDashboard() {
        await this.dashboard.click();
    }
    async goToJobs() {
        await this.jobs.click();
    }
    async goToCandidates() {
        await this.candidates.click();
    }
    async goToSettings() {
        await this.settings.click();
    }
    async goToEvaluation() {
        await this.evaluation.click();
    }
    async goToQuestionSet() {
        await this.questionSet.click();
    }
    async goToAssessment() {
        await this.assessment.click();
    }

    async goTo() {
        await this.page.goto('https://app.easy.jobs/company/question/group/?name=&sort_by=updated&order_by=DESC');
        await this.page.waitForLoadState('networkidle');
    }
}

class TopMenu {
    constructor(page) {
        this.page = page;
        this.toogleButton = page.locator(".toggler-button");
        this.viewCompanyPage = page.locator(".header-content-left");
        this.languageControl = page.locator(".language-control");
        this.messages = page.locator(".header__conversation");
        this.notification = page.locator(".dropdown.notification-list");
        this.profile = page.locator(".profile-control");
        this.companyLogo = page.locator(".company-logo");
        this.companyName = page.locator("company-name");
        this.userName = page.locator(".user-name");
    }

    async clickOnToogleButton() {
        await this.togglle.click();
    }
    async goToCompanyPage() {
        await this.viewCompanyPage.click();
    }
    async selectLanguage() {
        await this.languageControl.click();
    }
    async goToMessage() {
        await this.messages.click();
    }
    async clickNotification() {
        await this.notification.click();
    }
    async clickProfile() {
        await this.profile.click();
    }
    async getCompanyLogo() {
        await this.companyLogo;
    }
    async getCompanyName() {
        await this.companyName;
    }
    async getUsername() {
        await this.userName;
    }
}

module.exports = { LeftMenu, TopMenu };