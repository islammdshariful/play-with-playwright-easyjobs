class Helper{
    constructor(page){
        this.page = page;
        this.clickOnDate = page.locator("th[title='Select Month']");
        this.clickOnYear  = page.locator("th[title='Select Year']");
        this.previousYearButton = page.getByRole('cell', { name: ' Previous Month' });
    }

    async selectDate(date){
        await this.clickOnDate.click();

        await this.clickOnYear.click();

        for (let j = 0; j < 15; ++j){

            const dates = await this.page.locator("[data-action='selectYear']")

            const count = await dates.count()
            
            let flag = false
            for (let i = 0; i < count; ++i){
                if (await dates.nth(i).textContent() == date.year){
                    flag = true
                    break   
                   }
            }

            if (flag){
                break
            }

            await this.previousYearButton.click();
        }
        
        let chooseYear = await this.page.locator(`text='${date.year}'`).count();
        if (chooseYear > 1){
            await this.page.locator(`text='${date.year}'`).nth(1).click();
        }else {
            await this.page.locator(`text='${date.year}'`).nth(0).click(); 
        }

        await this.page.locator(`text='${date.month}'`).click();

        var chsdate = date.date.padStart(2, '0');        
        let chooseDate = await this.page.locator(`//td[contains(@class,'day')][contains(@data-day,'${chsdate}')]`, { timeout: 5000 }).count();
        
        if (chooseDate > 1){
            if (parseInt(chsdate) < 25){
                await this.page.locator(`//td[contains(@class,'day')][contains(@data-day,'${chsdate}')]`, { timeout: 5000 }).nth(0).click();
            }else{
                await this.page.locator(`//td[contains(@class,'day')][contains(@data-day,'${chsdate}')]`, { timeout: 5000 }).nth(1).click();
            }
        }else {
            await this.page.locator(`//td[contains(@class,'day')][contains(@data-day,'${chsdate}')]`, { timeout: 5000 }).nth(0).click();
        }
    }

    getMonthAsNumber(month){
        return String((new Date(`${month} 1, 2022`).getMonth() + 1)).padStart(2, '0');
    }
}

module.exports = {Helper};

