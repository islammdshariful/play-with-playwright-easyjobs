import { expect } from '@playwright/test';
import { LeftMenu } from './Menu';
const { Helper, getMonthAsNumber } = require("../utils/helper");
const { ToastMessage, PopUp } = require("./PopUp");

class Apply {
    constructor(page) {
        this.page = page;
        // Login page
        this.email = page.locator('#email');

        this.password = page.locator('#password');

        this.signInButton = page.locator('#login-submit');

        // Public Page
        this.applyNowButton = page.locator('.primary-button');

        this.applyNowButtonOnHeader = page.locator('.white-button');

        // Apply Job Information page
        this.firstName = page.locator('#first_name');

        this.lastName = page.locator('#last_name');

        this.phoneNumber = page.locator('#phone_number');

        this.nationality = page.locator(".multiselect__tags").nth(0);
        this.nationalityFiled = page.locator('#nationality');

        this.nationalID = page.locator('#national_id');

        this.dateOfBirth = page.locator('#dob_date_picker');
        this.clickOnDate = page.locator("th[title='Select Month']")
        this.clickOnYear = page.locator("th[title='Select Year']")
        this.previousYearButton = page.getByRole('cell', { name: ' Previous Month' })

        this.gender = page.locator('.multiselect__tags').nth(1);
        this.genderFiled = page.locator('#gender');

        this.addAcademyButton = page.locator('text=Add Academy');

        this.addCompanyButton = page.locator('text=Add Company');

        this.companyName = page.locator('#company_name_0');

        this.expectedSalary = page.locator('#expected_salary');

        this.linkedinProfile = page.locator('#linkedIn');

        this.facebookProfile = page.locator('#facebook');

        this.saveAndContinueButton = page.locator("text='Save and Continue'");

        this.BackButton = page.locator("text='Back'");

        // Apply Page Resume Page
        this.coverLetter = page.locator('#quill_editor');

        this.uploadPhoto = '#imageUpload';
        this.cropImage = page.locator('#cropImageBtn')

        this.uploadResume = '#file_attach';

        this.submitResumeLinkButtom = page.locator('#resume_link_button');
        this.resumeLink = page.locator('#resume_link');

        this.aggrement = page.locator('.checkbox-text');

        // Quiz
        this.startQuiz = page.locator('.primary-button')

        this.submitAnswerButton = page.locator('.semi-button-info')

        // Apply Page Preview Page
        this.personalInformationTab = page.locator('[aria-controls="personal_information"]')

        this.resumeTab = page.locator('[aria-controls="resume"]')

        this.screeningTab = page.locator('[aria-controls="questions"]')

        this.submitJobApplication = page.locator('.primary-button')

        // → // Basic Information
        this.basicInformationTitle = page.locator("//div[@id='personal_information']/section[1]/div[1]");

        this.previewBasicInformationSection = "//div[@id='personal_information']/section[1]/div[2]/div/div[2]"

        this.previewProfileimage = page.locator("//div[@class='profile-picture__preview']/img")

        this.previewFirstNameLabel = page.locator(`${this.previewBasicInformationSection}/div[1]/div/p[1]`)
        this.previewFirstName = page.locator(`${this.previewBasicInformationSection}/div[1]/div/p[2]`)

        this.previewLastNameLabel = page.locator(`${this.previewBasicInformationSection}/div[2]/div/p[1]`)
        this.previewLastName = page.locator(`${this.previewBasicInformationSection}/div[2]/div/p[2]`)

        this.previewEmailLabel = page.locator(`${this.previewBasicInformationSection}/div[3]/div/p[1]`)
        this.previewEmail = page.locator(`${this.previewBasicInformationSection}/div[3]/div/p[2]`)

        this.previewPhoneLabel = page.locator(`${this.previewBasicInformationSection}/div[4]/div/p[1]`)
        this.previewPhone = page.locator(`${this.previewBasicInformationSection}/div[4]/div/p[2]`)

        this.previewNationalityLabel = page.locator(`${this.previewBasicInformationSection}/div[5]/div/p[1]`)
        this.previewNationality = page.locator(`${this.previewBasicInformationSection}/div[5]/div/p[2]`)

        this.previewNationalIDLabel = page.locator(`${this.previewBasicInformationSection}/div[6]/div/p[1]`)
        this.previewNationalID = page.locator(`${this.previewBasicInformationSection}/div[6]/div/p[2]`)

        this.previewDOBLabel = page.locator(`${this.previewBasicInformationSection}/div[7]/div/p[1]`)
        this.previewDOB = page.locator(`${this.previewBasicInformationSection}/div[7]/div/p[2]`)

        this.previewGenderLabel = page.locator(`${this.previewBasicInformationSection}/div[8]/div/p[1]`)
        this.previewGender = page.locator(`${this.previewBasicInformationSection}/div[8]/div/p[2]`)

        // → // Education Qualification
        this.previewEducationTitle = page.locator("//div[@id='personal_information']/section[2]/div[1]")

        this.previewEducationSection = "//div[@id='personal_information']/section[2]/div[2]/div/div[2]"

        this.previewLevelOfEducationLabel = page.locator(`${this.previewEducationSection}/div[1]/div/p[1]`)
        this.previewLevelOfEducation = page.locator(`${this.previewEducationSection}/div[1]/div/p[2]`)

        this.previewDegreeLabel = page.locator(`${this.previewEducationSection}/div[2]/div/p[1]`)
        this.previewDegree = page.locator(`${this.previewEducationSection}/div[2]/div/p[2]`)

        this.previewyearOfPassingLabel = page.locator(`${this.previewEducationSection}/div[3]/div/p[1]`)
        this.previewyearOfPassing = page.locator(`${this.previewEducationSection}/div[3]/div/p[2]`)

        this.previewInstitutionLabel = page.locator(`${this.previewEducationSection}/div[4]/div/p[1]`)
        this.previewInstitution = page.locator(`${this.previewEducationSection}/div[4]/div/p[2]`)


        // → // Education Qualification
        this.previewEmploymentTitle = page.locator("//div[@id='personal_information']/section[3]/div[1]")

        this.previewEmploymentSection = "//div[@id='personal_information']/section[3]/div[2]/div/div[2]"

        this.previewCompanyNameLabel = page.locator(`${this.previewEmploymentSection}/div[1]/div/p[1]`)
        this.previewCompanyName = page.locator(`${this.previewEmploymentSection}/div[1]/div/p[2]`)

        this.previewDesignationLabel = page.locator(`${this.previewEmploymentSection}/div[2]/div/p[1]`)
        this.previewDesignation = page.locator(`${this.previewEmploymentSection}/div[2]/div/p[2]`)

        this.previewDepartmentLabel = page.locator(`${this.previewEmploymentSection}/div[3]/div/p[1]`)
        this.previewDepartment = page.locator(`${this.previewEmploymentSection}/div[3]/div/p[2]`)

        this.previeweEmploymentPeriodLabel = page.locator(`${this.previewEmploymentSection}/div[4]/div/p[1]`)
        this.previeweEmploymentPeriod = page.locator(`${this.previewEmploymentSection}/div[4]/div/p[2]`)

        this.previewResponsibilitiesLabel = page.locator(`${this.previewEmploymentSection}/div[5]/div/p[1]`)
        this.previewResponsibilities = page.locator(`${this.previewEmploymentSection}/div[5]/div/p[2]`)

        // → // Others
        this.previewOtherTitle = page.locator("//div[@id='personal_information']/section[4]/div[1]")

        this.previewOtherSection = "//div[@id='personal_information']/section[4]/div[2]/div/div"

        this.previewExpectedSalaryLabel = page.locator(`${this.previewOtherSection}/div[1]/div/p[1]`)
        this.previewExpectedSalary = page.locator(`${this.previewOtherSection}/div[1]/div/p[2]`)

        this.previewLinkedInLabel = page.locator(`${this.previewOtherSection}/div[2]/div/p[1]`)
        this.previewLinkedIn = page.locator(`${this.previewOtherSection}/div[2]/div/p[2]`)

        this.previewFacebookLabel = page.locator(`${this.previewOtherSection}/div[3]/div/p[1]`)
        this.previewFacebook = page.locator(`${this.previewOtherSection}/div[3]/div/p[2]`)


        // Resume
        this.previewCoverLetterTitle = page.locator("//div[@id='resume']/section[1]/div[1]")

        this.previewCoverLetter = page.locator("//div[@id='resume']/section[1]/div[2]/div/div/p")

        this.previewResumeTitle = page.locator("//div[@id='resume']/section[2]/div[1]");

        this.previeeResume = page.locator("//div[@id='resume']/section[2]/div[2]")

        // Screening
        this.previewScreeningQuestionTitle = page.locator("//div[@id='questions']/section[1]/div[1]")

        this.previewScreeningQuestions = "//div[@id='questions']/section[1]/div[2]/ul"

        // Complete Page
        this.messageTitle = page.locator('.application-status__message__title');

        this.messageDetails = page.locator('.application-status__message__details');

        this.seeAppliedJob = page.locator("text='See Applied Job'");

        this.backButton = page.locator("text='Back'");

        this.goToCompanyPage = page.locator('.primary-button');

        this.toastMessage = new ToastMessage(page);

        this.helper = new Helper(page)

        this.popup = new PopUp(page)

        this.leftMenu = new LeftMenu(page)
    }

    async goTo(url) {
        await this.page.goto(url);
    }

    async validLogin(candidate) {
        await this.email.fill(candidate.credentials.email);

        await this.password.fill(candidate.credentials.password);

        await this.signInButton.click()

        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickApplyNow() {
        await this.applyNowButton.click();
    }

    async addEducation(education) {
        let hasValue = await this.page.locator('.form-card__erase-button').nth(0).count();
        if (hasValue == 1) {
            await this.page.locator('.form-card__erase-button').nth(0).click();
            this.popup.clickOk();
        }

        for (var i = 0; i < Object.keys(education).length; i++) {
            await this.addAcademyButton.click();

            await this.page.locator(`#level_${i}`).fill(education[i].level);

            await this.page.locator(`#degree_${i}`).fill(education[i].degree);

            await this.page.locator(`#passing_year_${i}`).fill(education[i].year);

            await this.page.locator(`#institute_name_${i}`).fill(education[i].institute);
        }
    }

    async addEmployementHistory(company) {
        let hasValue = await this.page.locator('.form-card__erase-button').nth(1).count();
        if (hasValue == 1) {
            await this.page.locator('.form-card__erase-button').nth(1).click();
            this.popup.clickOk();
        }

        for (var i = 0; i < Object.keys(company).length; i++) {
            await this.addCompanyButton.click();

            await this.page.locator(`#company_name_${i}`).fill(company[i].name);

            await this.page.locator(`#designation_${i}`).fill(company[i].designation);

            await this.page.locator(`#department_${i}`).fill(company[i].department);

            await this.page.locator(`#employment_start_${i}`).click()

            let { start, end, currentlyWorking } = company[i].employement
            await this.helper.selectDate(start);

            if (currentlyWorking) {
                await this.page.locator('.checkbox-text').nth(i).click()
            } else {
                await this.page.locator(`#employment_end_${i}`).click();

                await this.helper.selectDate(end);
            }
            await this.page.locator(`#responsibilities_${i}`).fill(company[i].responsibilities);
        }
    }

    async addBasicInformation(basicInfo) {
        await this.firstName.fill('');
        await this.firstName.fill(basicInfo.firstName);

        await this.lastName.fill('');
        await this.lastName.fill(basicInfo.lastName);

        await this.phoneNumber.fill('');
        await this.phoneNumber.fill(basicInfo.phoneNumber);
        var nationalityCheck = await this.nationality.textContent()
        if ((nationalityCheck.replace(/\s+/g, ' ').trim()) != basicInfo.nationality) {
            await this.nationality.click();
            await this.nationalityFiled.fill(basicInfo.nationality);
            await this.page.locator(`text='${basicInfo.nationality}'`, { timeout: 5000 }).click();
        }

        await this.nationalID.fill(basicInfo.nationalID);

        await this.dateOfBirth.click();
        await this.helper.selectDate(basicInfo.DOB);

        await this.gender.click();
        await this.genderFiled.fill(basicInfo.gender);
        await this.page.locator(`text='${basicInfo.gender}'`).click();
    }

    async addOthers(candidate) {
        let { social, salary } = candidate

        await this.expectedSalary.fill(salary.expectedSalary);

        await this.linkedinProfile.fill(social.linkedin);

        await this.facebookProfile.fill(social.facebook);
    }

    async addCoverLetterAndDocuments(documents) {
        await this.coverLetter.fill(documents.coverLetter);

        await this.page.setInputFiles(this.uploadPhoto, documents.photo)
        await this.cropImage.click();

        if (!documents.hasRusumeLink) {
            await this.page.setInputFiles(this.uploadResume, documents.resume)
            await this.toastMessage.hasMessage('Resume uploaded.');
        } else {
            await this.submitResumeLinkButtom.click();
            await this.resumeLink.fill(documents.resumeLink);
        }

        await this.aggrement.click()
    }

    async doScreeningQuestion(question) {
        var multipleChoiceCount = -1;
        var plainTextCount = -1;
        for (var i = 0; i < Object.keys(question).length; i++) {
            if (question[i].type == 'Multiple Choice') {
                multipleChoiceCount += 1;
                for (var j = 0; j < Object.keys(question[i].correct).length; j++) {
                    if (question[i].correct[j] == 0) {
                        await this.page.locator(`//li[@class='list-item']/div[2]/div[1]/label`).nth(multipleChoiceCount).click();
                    } else {
                        await this.page.locator(`//li[@class='list-item']/div[2]/div[2]/label`).nth(multipleChoiceCount).click();
                    }
                }
            } else {
                plainTextCount += 1;
                await this.page.locator(`[placeholder="Write answer here"]`).nth(plainTextCount).fill(question[i].answer)
            }
        }
    }

    async doQuiz(question) {
        await this.startQuiz.click();
        for (var i = 0; i < Object.keys(question).length; i++) {
            for (var j = 0; j < Object.keys(question[i].correct).length; j++) {
                if (question[i].correct[j] == 0) {
                    await this.page.locator(`//div[@class='question-answer-body']/div[2]/div[1]/label`).click();
                } else {
                    await this.page.locator(`//div[@class='question-answer-body']/div[2]/div[2]/label`).click();
                }
            }
            await this.submitAnswerButton.click();
        }
    }

    async previewBasicInformation(candidate) {
        let { basicInfo, credentials } = candidate;

        expect.soft(await this.basicInformationTitle).toHaveText("Basic Information")

        expect.soft(await this.previewFirstNameLabel).toHaveText("First Name")
        expect.soft(await this.previewFirstName).toHaveText(basicInfo.firstName)

        expect.soft(await this.previewLastNameLabel).toHaveText("Last Name")
        expect.soft(await this.previewLastName).toHaveText(basicInfo.lastName)

        expect.soft(await this.previewEmailLabel).toHaveText("Email Address")
        expect.soft(await this.previewEmail).toHaveText(credentials.email)

        expect.soft(await this.previewPhoneLabel).toHaveText("Phone No*")
        expect.soft(await this.previewPhone).toHaveText(basicInfo.phoneNumber)

        expect.soft(await this.previewNationalityLabel).toHaveText("Nationality")
        expect.soft(await this.previewNationality).toHaveText(basicInfo.nationality)

        expect.soft(await this.previewNationalIDLabel).toHaveText("National ID/Passport Number/Driving License")
        expect.soft(await this.previewNationalID).toHaveText(basicInfo.nationalID)

        expect.soft(await this.previewDOBLabel).toHaveText("Date of Birth")

        expect.soft(await this.previewDOB).toHaveText(`${basicInfo.DOB.date}/${this.helper.getMonthAsNumber(basicInfo.DOB.month)}/${basicInfo.DOB.year}`)

        expect.soft(await this.previewGenderLabel).toHaveText("Gender*")
        expect.soft(await this.previewGender).toHaveText(basicInfo.gender)
    }

    async previewEducation(education) {
        await expect.soft(this.previewEducationTitle).toHaveText("Educational Qualification")
        for (var i = 0; i < Object.keys(education).length; i++) {
            await expect.soft(this.previewLevelOfEducationLabel).toHaveText("Level of Education*")
            await expect.soft(this.previewLevelOfEducation).toHaveText(education[i].level)

            await expect.soft(this.previewDegreeLabel).toHaveText("Exam/Degree Title*")
            await expect.soft(this.previewDegree).toHaveText(education[i].degree)

            await expect.soft(this.previewyearOfPassingLabel).toHaveText("Year of passing*")
            await expect.soft(this.previewyearOfPassing).toHaveText(education[i].year)

            await expect.soft(this.previewInstitutionLabel).toHaveText("Institution Name*")
            await expect.soft(this.previewInstitution).toHaveText(education[i].institute)
        }
    }

    async previewEmployment(company) {
        await expect.soft(this.previewEmploymentTitle).toHaveText("Employment History")
        for (var i = 0; i < Object.keys(company).length; i++) {
            await expect.soft(this.previewCompanyNameLabel).toHaveText("Company Name")
            await expect.soft(this.previewCompanyName).toHaveText(company[i].name)

            await expect.soft(this.previewDesignationLabel).toHaveText("Designation")
            await expect.soft(this.previewDesignation).toHaveText(company[i].designation)

            await expect.soft(this.previewDepartmentLabel).toHaveText("Department")
            await expect.soft(this.previewDepartment).toHaveText(company[i].department)

            await expect.soft(this.previeweEmploymentPeriodLabel).toHaveText("Employment Period")

            const startEmploymentPeriod = `${company[i].employement.start.date.padStart(2, '0')} ${company[i].employement.start.month}, ${company[i].employement.start.year}`
            const endEmploymentPeriod = `${company[i].employement.end.date.padStart(2, '0')} ${company[i].employement.end.month}, ${company[i].employement.end.year}`
            const employementPeriod = await this.previeweEmploymentPeriod.textContent();
            await expect.soft(employementPeriod.replace(/\s+/g, ' ').trim()).toEqual(`${startEmploymentPeriod} to ${endEmploymentPeriod}`)

            await expect.soft(this.previewResponsibilitiesLabel).toHaveText("Responsibilities")
            await expect.soft(this.previewResponsibilities).toHaveText(company[i].responsibilities)
        }
    }

    async previewOther(candidate) {
        let { expectedSalary, social, salary } = candidate

        await expect.soft(this.previewOtherTitle).toHaveText("Other")

        await expect.soft(this.previewExpectedSalaryLabel).toHaveText("Expected Salary*")
        await expect.soft(this.previewExpectedSalary).toHaveText(salary.expectedSalary)

        await expect.soft(this.previewLinkedInLabel).toHaveText("Linkedin Profile Link")
        await expect.soft(this.previewLinkedIn).toHaveText(social.linkedin)

        await expect.soft(this.previewFacebookLabel).toHaveText("Facebook profile link")
        await expect.soft(this.previewFacebook).toHaveText(social.facebook)

    }

    async previewResume(documents) {
        await expect.soft(this.previewCoverLetterTitle).toHaveText("Cover Letter")

        await expect.soft(this.previewCoverLetter).toHaveText(documents.coverLetter)

        await expect.soft(this.previewResumeTitle).toHaveText("Resume")
    }

    async previewScreening(question) {
        await expect.soft(this.previewScreeningQuestionTitle).toHaveText("Screening Questions")
        var correctAnswers = []
        for (var i = 0; i < Object.keys(question).length; i++) {
            await expect.soft(this.page.locator(`${this.previewScreeningQuestions}/li[${[i + 1]}]/p[1]`)).toHaveText(`Screening Question ${[i + 1]}`)

            var questionAnswer = await (this.page.locator(`${this.previewScreeningQuestions}/li[${[i + 1]}]/p[2]`)).textContent();
            await expect.soft(questionAnswer.replace(/\s+/g, ' ').trim()).toEqual(`Question: ${question[i].name}`)

            if (question[i].type == 'Text') {
                correctAnswers.push(question[i].answer);
            } else {
                for (var j = 0; j < Object.keys(question[i].correct).length; j++) {
                    correctAnswers.push(question[i].correct[j])
                }
            }
        }

        for (var k = 0; k < correctAnswers.length; k++) {
            var questionAnswer = await (this.page.locator(`${this.previewScreeningQuestions}/li[${[k + 1]}]/p[3]`)).textContent();

            if (question[k].type == 'Text') {
                await expect.soft(questionAnswer.replace(/\s+/g, ' ').trim()).toEqual(`Answer: ${correctAnswers[k]}`)
            } else {
                await expect.soft(questionAnswer.replace(/\s+/g, ' ').trim()).toEqual(`Answer: ${question[k].options[correctAnswers[k]]}`)
            }
        }
    }

    async preview(candidate, question) {
        let { education, company, documents } = candidate;

        await this.previewBasicInformation(candidate)

        await this.previewEducation(education)

        await this.previewEmployment(company)

        await this.previewOther(candidate)

        await this.resumeTab.click()

        await this.previewResume(documents)

        await this.screeningTab.click()

        await this.previewScreening(question)

        await this.personalInformationTab.click()

        await this.previewBasicInformation(candidate)
    }

    async successPage() {
        await expect.soft(this.messageTitle).toHaveText("Congratulations")

        await expect.soft(this.messageDetails).toHaveText("You have successfully applied this job")

        await this.seeAppliedJob.click()

        await expect(this.page).toHaveTitle("easy.jobs | Dashboard", { timeout: 5000 })

        await this.leftMenu.doLogout()
    }

    async submitApplication() {
        await this.submitJobApplication.click()
    }

    async applyJob(candidate, question) {
        let { basicInfo, education, company, documents } = candidate;
        let { screeningQuestion, quizQuestion } = question;

        await this.addBasicInformation(basicInfo);

        await this.addEducation(education);

        await this.addEmployementHistory(company);

        await this.addOthers(candidate);

        await this.saveAndContinueButton.click();

        await this.addCoverLetterAndDocuments(documents);

        await this.saveAndContinueButton.click();

        await this.doScreeningQuestion(screeningQuestion);

        await this.saveAndContinueButton.click();

        await this.doQuiz(quizQuestion);
    }
}
module.exports = { Apply };