//@ts-check
import { CompanyPage } from '../pages/CompanyPage';
import { questionsSets, questions } from '../utils/data/questions';
import { newUser } from '../utils/data/faker';
import { jobs } from '../utils/data/jobs';
import { users } from '../utils/credentials';
import { candidates } from '../utils/data/candidates';
import { readMails } from '../utils/mails/mail-helper';
import { companies } from '../utils/data/company';
const { test } = require('@playwright/test');

const { POManager } = require('../pages/POManager');

test.describe.configure({ mode: 'serial' });
let page;
let pomanager;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    pomanager = new POManager(page);
});

test('Login to account', async () => {
    const loginPage = pomanager.getLoginPage();
    await loginPage.goTo();
    const user = users().users.main;
    await loginPage.validLogin(user)
});

// test('Create Question Set', async () => {
//     const leftMenu = pomanager.getLeftMenu();
//     await leftMenu.goToEvaluation();
//     await leftMenu.goToQuestionSet();
//     const questionSet = pomanager.getQuestionSet();
//     let qSet = questionsSets();
//     let ques = questions();
//     await questionSet.addQuestionSet(qSet.sets.screening.one, ques.screening.question1)
//     await questionSet.addQuestionSet(qSet.sets.quiz.one, ques.quiz.question1)
// });

test('Create a job', async () => {
    const leftMenu = pomanager.getLeftMenu();
    await leftMenu.goToDashboard();
    await leftMenu.goToJobs();
    let jobData = jobs()
    const job = pomanager.getJobPage();
    await job.createAJobPost(jobData.jobs.job1);
    await job.viewCreatedJob();
})

test('Apply to a job', async () => {
    const applyPage = pomanager.getApplyPage();
    // await applyPage.goTo('')
    const candidate = candidates().candidates.candidateOne
    let screeningQuestion = questions().screening.question1;
    let quizQuestion = questions().quiz.question1;
    let question = { screeningQuestion, quizQuestion };
    await applyPage.clickApplyNow();
    await applyPage.validLogin(candidate);
    await applyPage.applyJob(candidate, question);
})

test('Preview the applied job', async () => {
    const applyPage = pomanager.getApplyPage();
    const candidate = candidates().candidates.candidateOne
    let screeningQuestion = questions().screening.question1;
    await applyPage.preview(candidate, screeningQuestion);
})

test('Submit application', async () => {
    const applyPage = pomanager.getApplyPage();
    await applyPage.submitApplication();
})

test('Preview success page', async () => {
    const applyPage = pomanager.getApplyPage();
    await applyPage.successPage();
})

test('Check notification of new applicant', async () => {
    const job = jobs().jobs.job1.basic
    const candidate = candidates().candidates.candidateOne.basicInfo
    const loginPage = pomanager.getLoginPage();
    await loginPage.goTo();
    const user = users().users.main;
    await loginPage.validLogin(user)
    const notificationPage = pomanager.getNotificationPage();
    await notificationPage.checkNotificationFromMenuBar(candidate, job)
})

test('Check email of new applicant', async () => {
    const job = jobs().jobs.job1.basic
    const company = companies().company.one.basicInfo
    const subject = `${job.title} has received a new application.`
    const from = 'no-reply@easy.jobs'
    const expectedMessage = `Hi, Your Job Opening for the position ${job.title} has received a new applicant. Click here to see 
    the Application now. With best regards, ${company.title} © 2023 EasyJobs. All rights reserved.`
    await readMails(subject, from, expectedMessage)
})