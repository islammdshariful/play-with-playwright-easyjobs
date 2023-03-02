import { Helper } from "../utils/helper";
import { ToastMessage, PopUp } from "./PopUp";


class Jobs{
    constructor(page){
        //-----------------------------------Create a Job Post-----------------------------------//
        // Information page locators
        this.page = page;
        this.createJobPost = page.locator('.primary-button');

        this.jobTitleField = page.locator('#job-title');

        this.jobDetails = page.locator('.nav-item').first();

        this.responsibilities = page.locator('.nav-item').nth(1);

        this.jobDetailsField = page.locator('[data-placeholder="Write job details here."]');

        this.responsibilitiesField = page.locator('[data-placeholder="Write responsibilities here."]');

        this.selectCatagory = page.locator('text=Select Category');
        this.selectCatagoryFiled = page.locator("[placeholder='Select Category']");

        this.vacancies = page.locator('#vacancies')

        this.jobType = page.locator('text=Select Job Type');
        this.jobTypeFiled = page.locator('[placeholder="Select Job Type"]');

        this.selectCountry = page.locator('text=Select Country');
        this.selectCountryField = page.locator('[placeholder="Select Country"]');

        this.seleteState = page.locator('text=Select State');
        this.seleteStateField = page.locator('[placeholder="Select State"]');

        this.selectCity = page.locator('text=Select City');
        this.selectCityField = page.locator('[placeholder="Select City"]');

        this.expiryDate = page.locator('#expire_date');
        this.goNextMonth = page.getByRole('cell', { name: ' Next Month' })
        this.date = page.getByRole('cell', { name: '28' })

        this.showOnJobBoard = page.locator("label[for='show_on_job_board']");

        this.selectSkills = page.locator('.multiselect').nth(5);
        this.selectSkillsField = page.locator('[placeholder="Select Skills"]');

        this.employmentType = page.locator('text=Select Employment Type');
        this.employmentTypeField = page.locator('[placeholder="Select Employment Type"]');

        this.experiencesLevel = page.locator('text=Select Experiences Level');
        this.experiencesLevelField = page.locator('[placeholder="Select Experiences Level"]');

        this.salaryType = page.locator('text=Select Salary Type');
        this.salaryTypeField = page.locator('[placeholder="Select Salary Type"]');

        this.salary = page.locator('#salary');

        this.officeTime = page.locator("input[placeholder='Office Time']");

        this.showCompanyBenefits = page.locator("label[for='has-benefits']");

        this.updateBannerImage = page.locator('.file-browse-button');

        this.saveAndContinue = page.locator("[type='submit']");

        this.selectSet = page.locator("text='Select a set.'");
        this.selectSetField = page.locator('[placeholder="Select a set."]')

        // Screening Question Page Locators
        this.screeningQuestionSet1 = page.locator('text=Alpha');

        // Quic Question Page Locators
        this.quizSet1 = page.locator('text=Beta');
        this.quizDuration = page.locator('#exam_duration');

        this.marksPerQuestion = page.locator('#marks_per_question');

        // Custom Field
        this.saveAndPublish = page.locator("text='Save & Publish'");

        // Job Publish Modal
        this.facebookShare = page.locator('.facebook-button');

        this.linkedShare = page.locator('.linkedin-button');

        this.twitterShare = page.locator('.twitter-button');

        this.copyLink = page.locator('.primary-button').nth(1);

        this.close = page.locator('.close');

        this.title = page.locator('.text-center').first();

        this.image = page.locator('.Share-BG-Image');

        this.content = page.locator('.text-center').nth(1);
        //-----------------------------------Job Dashboard Page-----------------------------------//
        this.filterBystatusDropDown = page.locator('.dropdown.pipeline-action.show');

        this.filterBystatusPublish = page.locator("div[class='dropdown-menu dropdown-menu-left show'] a:nth-child(1)");
        this.filterBystatusDraft = page.locator("text=Draft Jobs");
        this.filterBystatusArchived = page.locator("text=Archived Jobs");

        this.searchJobs = page.locator(".custom-job-filter-button");
        this.jobStatusActive = page.locator('text=Active');
        this.jobStatusExpired = page.locator('text=Expired');
        this.followStatusExpired = page.locator('text=Following');
        this.followStatusExpired = page.locator('text=Unfollowed');

        //-----------------------------------Jobs-----------------------------------//
        this.moreButton = page.locator("button[title='More']")
        this.viewJobButton = page.locator("//a[normalize-space()='View']")


        this.helper = new Helper(page);
        this.toastMessage = new ToastMessage(page); 
    }

    async basic(basic){
        await this.jobTitleField.fill(basic.title);

        await this.jobDetailsField.fill(basic.details);

        await this.responsibilities.click();
        await this.responsibilitiesField.fill(basic.responsibilities);
        
        await this.selectCatagory.click();
        await this.selectCatagoryFiled.fill(basic.calegory);
        await this.page.locator(`text='${basic.calegory}'`).click()
        
        await this.vacancies.fill(basic.vacancies);
        
        await this.jobType.click();
        // await this.jobTypeFiled.type(basic.jobtypes);
        await this.page.keyboard.press('ArrowDown');
        await this.page.locator(`text='${basic.jobtypes}'`).click();
        if (basic.jobtypes != 'Remote'){
            await this.selectCountry.click();
            await this.selectCountryField.fill(basic.country);
            await this.page.locator(`text='${basic.country}'`).click()
            
            await this.seleteState.click();
            await this.seleteStateField.fill(basic.state);
            await this.page.locator(`text='${basic.state}'`).click()
    
            await this.selectCity.click();
            await this.selectCityField.fill(basic.city);
            await this.page.locator(`text='${basic.city}'`).nth(1).click()
        }
        await this.expiryDate.click();
        await this.helper.selectDate(basic.expiryDate);

        basic.onBoard == true ? await this.showOnJobBoard.click() : 0;

        for (var i = 0 ; i < Object.keys(basic.skills).length ; i++){
            await this.selectSkills.click();
            await this.selectSkillsField.fill(basic.skills[i]);
            await this.page.locator(`text='${basic.skills[i]}'`).click()
        }
    }

    async employment(employment){
        await this.employmentType.click();
        await this.employmentTypeField.fill(employment.employmentType);
        await this.page.locator(`text='${employment.employmentType}'`).nth(1).click()

        await this.experiencesLevel.click();
        await this.experiencesLevelField.fill(employment.experience);
        await this.page.locator(`text='${employment.experience}'`).click()

        await this.salaryType.click();
        await this.salaryTypeField.fill(employment.salaryType);
        await this.page.locator(`text='${employment.salaryType}'`).click()

        await this.salary.fill(employment.salary);

        await this.officeTime.fill(employment.officeTime);

        employment.showBenefits == true ? await this.showCompanyBenefits.click() : 0;
    }

    async screeningQuestions(screening){
        if (screening.hasScreening){
            await this.selectSet.click();
            await this.selectSetField.fill(screening.screeningQuestionSet);
            await this.page.locator(`text=${screening.screeningQuestionSet}`).click()
            
        }
    }

    async quiz(quiz){
        if (quiz.hasQuiz){
            await this.selectSet.click();
            await this.selectSetField.fill(quiz.quizSet);
            await this.page.locator(`text=${quiz.quizSet}`).click()
    
            await this.quizDuration.fill(quiz.duration);
            await this.marksPerQuestion.fill(quiz.mark);
        }
    }

    async viewCreatedJob(){
        const url = await this.twitterShare.getAttribute('href')
        const trimmedUrl = url.replace(/^https:\/\/twitter\.com\/intent\/tweet\?text=/, '');
        await this.page.goto(trimmedUrl)
    }

    async createAJobPost(job){
        let { basic, employment, screening, quiz } = job
        // Clicking on 
        await this.createJobPost.click();
        // Information
        await this.basic(basic);

        await this.employment(employment);

        await this.saveAndContinue.click();
        // Screening Questions
        await this.screeningQuestions(screening)
        await this.saveAndContinue.click();
        // Quiz
        await this.quiz(quiz);
        await this.saveAndContinue.click();
        // Modal
        await this.saveAndPublish.click()
        const modal = new PopUp(this.page);
        await modal.clickOk()
        // Copy Link
        await this.copyLink.click();
        // Close Modal
        await this.close.click();
    }
}
export default {Jobs};