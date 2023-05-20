const { LeftMenu } = require("./Menu")

class Candidate{
    constructor(page){
        this.page = page;

        this.search = page.locator("[placeholder='search candidates']")
        this.selectJob = page.locator('.multiselect__placeholder').nth(0)
        this.selectRating = page.locator('.multiselect__placeholder').nth(1)
        this.selectStatus = page.locator('.multiselect__placeholder').nth(2)
        this.reset = page.locator('.semi-button-warning')
        
        this.candidateName = page.locator("//div[@class='col']/div/div[3]/h5").nth(0)
        this.viewDetails = page.locator("//div[@class='col']/div/a").nth(0)
        this.menu = new LeftMenu(page);
    }

    async goToCandidateProfile(){
        await this.menu.goToCandidates();
        await this.viewDetails.click();
    }

}
module.exports = {Candidate};