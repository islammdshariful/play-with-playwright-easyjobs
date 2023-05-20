const { LoginPage } = require('./Login');
const { Registration } = require('./Registration');
const { LeftMenu, TopMenu } = require('./Menu');
const { CompanyPage } = require('./CompanyPage');
const { QuestionSet } = require('./QuestionSet');
const { Jobs } = require('./Jobs').default;
const { PopUp } = require('./PopUp');
const { Apply } = require('./Apply');
const { Candidate } = require('./Candidates');
const { CandidateProfile } = require('./CandidateProfile')
const { NotificationChecker } = require('./Notification')


class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.registration = new Registration(this.page);
        this.leftMenu = new LeftMenu(this.page);
        this.topMenu = new TopMenu(this.page);
        this.companyPage = new CompanyPage(this.page);
        this.questionSet = new QuestionSet(this.page);
        this.jobs = new Jobs(this.page);
        this.popup = new PopUp(this.page);
        this.apply = new Apply(this.page);
        this.candidate = new Candidate(this.page)
        this.cndidateProfile = new CandidateProfile(this.page)
        this.notification = new NotificationChecker(this.page)
    }

    getNotificationPage(){
        return this.notification;
    }

    getCandidatePage(){
        return this.candidate;
    }

    getCandidateProfilePage(){
        return this.cndidateProfile;
    }

    getApplyPage(){
        return this.apply;
    }

    getJobPage(){
        return this.jobs;
    }

    getPopUpPage(){
        return this.popup;
    }

    getLoginPage(){
        return this.loginPage;
    }

    getRegistrationPage(){
        return this.registration;
    }

    getTopMenu(){
        return this.topMenu;
    }

    getLeftMenu(){
        return this.leftMenu;
    }

    getCompanyPage(){
        return this.companyPage;
    }

    getQuestionSet(){
        return this.questionSet;
    }
}
module.exports = {POManager};