const {expect} = require('@playwright/test');
const { ToastMessage } = require("./PopUp");
const { LeftMenu } = require("./Menu")

class CandidateProfile{
    constructor(page){
        this.page = page;

        // Navigation
        this.backButton = page.locator('back-button').nth(0)

        this.previousCandidate = page.locator('.back-button__icon').nth(1)

        this.nextCandidate = page.locator('.back-button__icon').nth(2)



        this.dropdown = page.locator('.back-button.dropdown')

        this.assignAssessment = page.locator('.assign')

        this.remove = page.locator('.remove')

        // Lelf section info
        this.image = page.locator('[alt="applicant-img"]')

        this.fullName = page.locator("//div[@class='user-info']/h5")

        this.jobApplied = page.locator("//div[@class='user-info']/p").nth(1)

        this.pipelineDropdown = page.locator("button[title='Applied']")

        this.pipelineShortlist = page.locator("//a[text()='Shortlist']")

        this.pipelineInterview = page.locator("//a[text()='Interview']")

        this.pipelineSelected = page.locator("//a[text()='Selected']")

        this.pipelineRejected = page.locator("//a[text()='Rejected']")

        this.firstNameLabel = page.locator("//ul[@class='user-info user-info__list']/li[1]/div[2]/p[1]")
        this.firstName = page.locator("//ul[@class='user-info user-info__list']/li[1]/div[2]/p[2]")

        this.lastNameLabel = page.locator("//ul[@class='user-info user-info__list']/li[2]/div[2]/p[1]")
        this.lastName = page.locator("//ul[@class='user-info user-info__list']/li[2]/div[2]/p[2]")

        this.emailLabel = page.locator("//ul[@class='user-info user-info__list']/li[3]/div[2]/p[1]")
        this.email = page.locator("//ul[@class='user-info user-info__list']/li[3]/div[2]/p[2]")

        this.phoneNumberLabel = page.locator("//ul[@class='user-info user-info__list']/li[4]/div[2]/p[1]")
        this.phoneNumber = page.locator("//ul[@class='user-info user-info__list']/li[4]/div[2]/p[2]")

        this.dateOfApplicationLabel = page.locator("//ul[@class='user-info user-info__list']/li[5]/div[2]/p[1]")
        this.dateOfApplication = page.locator("//ul[@class='user-info user-info__list']/li[5]/div[2]/p[2]")

        this.rateLabel = page.locator("//ul[@class='user-info user-info__list']/li[6]/div[2]/p")
        this.rate = page.locator("//ul[@class='user-info user-info__list']/li[6]/div[2]/div")

        this.socialProfilesLabel = page.locator("//ul[@class='user-info user-info__list']/li[5]/div[2]/p")
        this.socialLinkedInProfiles = page.locator(".e-linkedin")
        this.socialFacebookProfiles = page.locator(".e-facebook")

        this.emailCandidate = page.locator('.semi-button.semi-button-info')

        // Right section info

        this.currentSalaryLabel = page.locator('//li[@class="label__full  label__full--primary list-item--primary"]/p[1]').nth(2)

        this.currentSalary = page.locator('//li[@class="label__full  label__full--primary list-item--primary"]/p[2]').nth(2)

        this.currentSalaryLabel = page.locator('//li[@class="label__full  label__full--primary list-item--primary"]/p[1]').nth(3)

        this.currentSalary = page.locator('//li[@class="label__full  label__full--primary list-item--primary"]/p[2]').nth(3)

        this.noteField = page.locator('[placeholder="Add a note here"]')

        this.tagManager = page.locator('.multiselect__placeholder')

        this.noteCancelButton = page.locator('.semi-button-danger')

        this.noteSaveButton = page.locator('.button.semi-button-info')

        // Application Tab
        this.appllicationTab = page.locator("//div[@class='tab__card tab__card--primary gutter-10']/a[1]")
            // Cover letter
            this.showMore = page.locator("div[class='text-right'] a").nth(0)
            this.shortCoverLetter = page.locator('.details__text__pre')
            this.expandCoverLetter = page.locator("p[data-placeholder='Write cover letter here.']")
            // Experience 
            this.experienceInYears = page.locator("//div[@class='details__card gutter-10']/div[1]/p/label")

            this.experience = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[1]").nth(0)

            this.experienceCompany = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[2]").nth(0)

            this.experienceCompanyMoreButton = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[2]/a")

            this.experienceCompanyMoreInfo = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[3]").nth(0)

            this.experienceCompanyHideButton = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[3]/a")
            // Education
            this.educationDegree = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[1]").nth(1)

            this.educationLevel = page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[2]").nth(1)

            this.educationInstutute - page.locator("//div[@class='details__card gutter-10']/div[2]/ul/li[1]/p[3]").nth(0)
        // Resume Tab
        this.resumeTab = page.locator("//div[@class='tab__card tab__card--primary gutter-10']/a[2]")
        this.openResumeButton = page.locator(".semi-button.semi-button-info").nth(1)
        // Evaluation
        this.evaluationTab = page.locator("//div[@class='tab__card tab__card--primary gutter-10']/a[3]")
            // Quiz
            this.quizTab = page.locator(".details__card__head__tab").nth(0)

            this.quizTotalQuestion = page.locator("//ul[@class='info__list question-answer']/li[1]/p").nth(0)

            this.quizTotalMark = page.locator("//ul[@class='info__list question-answer']/li[2]/p").nth(0)

            this.quizMarkObtained = page.locator("//ul[@class='info__list question-answer']/li[2]/p").nth(0)

            this.quizQuestionOne = page.locator("//ul[@class='info__list question-answer']/li[1]/p[1]").nth(0)
            this.quizQuestionOneAnswer = page.locator("//ul[@class='info__list question-answer']/li[1]/p[2]")
            // Screenign Question
            this.screeningQuestionOne = page.locator("//ul[@class='info__list question-answer']/li[1]/p[1]")
            this.screeningQuestionOneAnswer = page.locator("//ul[@class='info__list question-answer']/li[1]/p[2]")
            // Attachment
            this.attachmentName = page.locator('[placeholder="Attachment Name"]')

            this.attachmentBrowse = page.locator('.file-browse-button')

            this.addDocument = page.locator('[placeholder="Add comment"]')

            this.attachmentUploadButton = page.locator("button[class='button primary-button']")

            this.attachmentCancel = page.locator('.button.semi-button-danger').nth(0)
        // Conversation Tab
        this.conversationTab = page.locator("//div[@class='tab__card tab__card--primary gutter-10']/a[4]")
        
        this.chatUserHeaderImage = page.locator("//div[@class='chat__box__head']/div[1]/a")
        
        this.chatUserName = page.locator('.name')
        
        this.chatUserHeaderInfo = page.locator('.info')
        
        this.chatTypeMessage = page.locator("div[aria-label='Rich Text Editor, main']")

        this.chatAttach = page.locator("input[name='attach']")

        this.chatSendButton = page.locator("button[class='semi-button info-button']")

        this.toastMessage = new ToastMessage(page);
        this.menu = new LeftMenu(page)
    }

    async sendMessage(message){
        await this.conversationTab.click();
        await this.chatTypeMessage.click();
        await this.chatTypeMessage.fill(message);
        await this.chatSendButton.click();
    }

    async viewCandidateInfo(candidate, jobTitle, dateOfApplication=null){
        let { credentials, basicInfo, social } = candidate
        await expect.soft(this.fullName).toHaveText(`${basicInfo.firstName} ${basicInfo.lastName}`);
        await expect.soft(this.jobApplied).toHaveText(jobTitle);
        
        // First Name
        await expect.soft(this.firstName).toHaveText(basicInfo.firstName)
        await expect.soft(this.lastName).toHaveText(basicInfo.lastName)
        await expect.soft(this.email).toHaveText(credentials.email)
        await expect.soft(this.phoneNumber).toHaveText(basicInfo.phoneNumber)
        if (dateOfApplication != null){
            await expect.soft(this.dateOfApplication).toHaveText(dateOfApplication)
        }
        await expect.soft(this.rate).toBeVisible()

        const newTab = this.page.waitForEvent('popup');
        await this.socialFacebookProfiles.click()
        const newPage = await newTab;
        await expect.soft(newPage).toHaveURL(social.facebook)
        newPage.close()

        const newTab1 = this.page.waitForEvent('popup');
        await this.socialLinkedInProfiles.click()
        const newPage1 = await newTab1;
        await expect.soft(newPage1).toHaveURL(social.linkedin)
        newPage1.close()
    }

    async viewCoverLetter(candidate){
        let { documents } = candidate
        await this.showMore.click()
        await expect.soft(this.expandCoverLetter).toHaveText(documents.coverLetter)
    }

    async viewExperience(candidate){
        let { company } = candidate
        for ( var i = 0; i < candidate.company.length; i++){
            var designation = company[i].designation
            var start = `${company[i].employement.start.month} ${company[i].employement.start.date.padStart(2, '0')} ${company[i].employement.start.year}`
            var end = `${company[i].employement.end.month} ${company[i].employement.end.date.padStart(2, '0')} ${company[i].employement.end.year}`
            var name = `${company[i].name}`
            var department = `${company[i].department}`
            var responsibilities = `Responsibilities: \n ${company[i].responsibilities}`
            await expect.soft(this.experience).nth(i).toHaveText(`${designation}(${start} - ${end} )`)
            await expect.soft(this.experienceCompany).nth(i).toHaveText(`${name}, ${department}`)
            await this.experienceCompanyMoreButton.nth(i).click()
            await expect.soft(this.experienceCompanyMoreInfo).nth(i).toHaveText(responsibilities)
            await this.experienceCompanyHideButton.nth(i).click()
        }
    }

    async viewEducation(candidate){
        let { education } = candidate
        console.log(education)
        for( var i = 0 ; i < education.length; i++){
            var degree = education[i].degree
            var level = education[i].level
            var institute = `${education[i].institute} ${education[i].year}`
            await expect.soft(this.educationDegree).nth([i+1]).toHaveText(degree)
            await expect.soft(this.educationLevel).nth([i+1]).toHaveText(level)
            await expect.soft(this.educationInstutute).nth(i).toHaveText(institute)
        }
    }

    async viewApplicationTab(candidate){
        await this.viewCoverLetter(candidate)
        await this.viewExperience(candidate)
        await this.viewEducation(candidate)
    }

    async viewQuiz(question){
        await this.evaluationTab.click()
        await this.quizTab.click()
        await expect.soft(this.quizTotalQuestion).toHaveText(`Total Questions: ${question.length}`)
        var totalMark = parseInt(job.quiz.mark) + parseInt(question.length)
        await expect.soft(this.quizTotalQuestion).toHaveText(`Total Marks: ${totalMark.toString()}`)
        await expect.soft(this.quizTotalQuestion).toHaveText(`Marks Obtained: 10`)

        for (var i = 0; i < question1.length; i++){
            expect.soft(this.quizQuestionOne).nth(i).toHaveText(`Question: 1.  ${question[i].name}`)
            var correctAnswer = question[i].correct
            // expect.soft(this.quizQuestionOne).nth(i).toHaveText(`Applicant answered:   ${question[i].options[]}`)
        }
    }

}
module.exports = {CandidateProfile};