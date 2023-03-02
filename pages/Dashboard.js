class Dashboard{
    constructor(page){
        this.page = page;
        this.dashboard= page.locator("text=Dashboard");

    }

    async goTo(){
        await this.page.goto(`${url}/login`);
    }
}