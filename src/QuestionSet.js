const {expect} = require('@playwright/test');
const { ToastMessage } = require("./PopUp");

class QuestionSet{
    constructor(page){
        this.page = page;

        this.sectionTitle = page.locator('.section-title');

        this.searchQuestionSet = page.locator('#filter_name');

        this.sortBy = page.locator('.multiselect__single');

        this.sortButton = page.locator('.semi-button-primary');

        this.noQuestionFoundYext = page.locator('.empty-message');

        this.addNew = page.locator('.primary-button');

        this.backToAllQuestionSet = page.locator('.back-button__text');

        this.createQuestionSetText = page.locator('.section-title');

        this.createQuestionDoc = page.locator('.trigger');

        this.docURL = page.locator("a[href='https://easy.jobs/docs/create-question-set']");

        this.toolTipCloseButton = page.locator('.tooltip-close');

        this.setNameField = page.locator('#set_name');

        this.setDescription = page.locator('#description');

        this.instruction = page.locator('[data-placeholder="Write here..."]');

        this.setType = page.locator('.multiselect__select');

        this.setTypeScreening = page.locator('text=Screening Test');

        this.setTypeQuiz = page.locator('text=Quiz Test');

        this.saveQuestionSet = page.locator("[type='submit']");

        this.toastMessage = new ToastMessage(page);
    }

    async addQuestionSet(set, question){
        // Creating a Question Set
        await this.addNew.click();

        await this.setNameField.fill(set.name);

        await this.setType.click();
        set.type == 'Screening' ? await this.setTypeScreening.click() : await this.setTypeQuiz.click();

        await this.setDescription.fill(set.description);

        await this.instruction.fill(set.instruction);

        await this.addQuestion(question);

        await this.saveQuestionSet.click();

        await this.toastMessage.hasText('Saved.');
    }

    async addQuestion(question){
        var multipleChoiceCount = -1
        for (var i = 0 ; i < Object.keys(question).length ; i++){
            await this.addNew.click();
            await this.page.locator(`#question-${i}`).fill(question[i].name);
            if (question[i].forQuiz != true){
                await this.page.locator(`.multiselect__tags`).nth([i+1]).click()
                await this.page.locator(`#question_type-${[i]}`).fill(question[i].type)
            }
            if (question[i].type == 'Text'){
                await this.page.keyboard.press('Enter');
            }else{
                if (question[i].forQuiz != true){
                    await this.page.keyboard.press('Enter');
                    multipleChoiceCount += 1;
                }
                if (Object.keys(question[i].options).length > 2){
                    var totalOptionsCount = 1
                    while (k < (question[i].options).length){   
                        await this.page.locator(`text=Add Option`).nth([multipleChoiceCount]).click();
                        totalOptionsCount += 1;
                    }
                }
                
                for ( var j = 0 ; j < Object.keys(question[i].options).length ; ++j){
                    // await this.page.locator(`//div[@class='screening-question-card']/div[2]/div[2]/div[${[j+1]}]/div/div/input`).nth([multipleChoiceCount]).fill(question[i].options[j]);

                    await this.page.locator(`input[placeholder='Option ${j+1}']`).nth([multipleChoiceCount]).fill(question[i].options[j]);
                }
                question[i].correct == 0 ? await this.page.locator(`//div[@class='form-box']/div[2]/div[1]/div[1]/div/label`).nth([multipleChoiceCount]).click() : await this.page.locator(`//div[@class='form-box']/div[2]/div[2]/div[1]/div/label`).nth([multipleChoiceCount]).click();
            }
        }
    }
}
module.exports = {QuestionSet};