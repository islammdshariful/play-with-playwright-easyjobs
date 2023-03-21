//@ts-check
import { CompanyPage } from '../pages/CompanyPage';
import { questionsSets, questions } from '../utils/data/questions';
import { newUser } from '../utils/data/faker';
import { jobs } from '../utils/data/jobs';
import { users } from '../utils/credentials';
import { candidates } from '../utils/data/candidates';
import { readMails } from '../utils/mails/mail-helper';
import { companies } from '../utils/data/company';
import { LeftMenu } from '../pages/Menu';
const { test } = require('@playwright/test');

const { POManager } = require('../pages/POManager');

test.describe.configure({ mode: 'serial' });

let page;
let pomanager;
let mainUser;
let jobData;
let questionSetData;
let questionsData;
let candidatesData;
let companyData;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    pomanager = new POManager(page);
    mainUser = users().users.main;
    jobData = jobs();
    questionSetData = questionsSets();
    questionsData = questions();
    candidatesData = candidates();
    companyData = companies();
});

test('Login to account', async () => {
    // Initialize the login page
    const loginPage = pomanager.getLoginPage();
    // Visiting Login page
    await loginPage.goTo();
    // Make a valid login
    await loginPage.validLogin(mainUser)
});

test('Create Question Set', async () => {
    // Initialize the left menu page
    const leftMenu = pomanager.getLeftMenu();
    // Visiting question set page
    await leftMenu.goToEvaluation();
    await leftMenu.goToQuestionSet();
    // Initialize the question set page
    const questionSet = pomanager.getQuestionSet();
    // Creating question sets for screen and quiz
    await questionSet.addQuestionSet(questionSetData.sets.screening.one, questionsData.screening.question1)
    await questionSet.addQuestionSet(questionSetData.sets.quiz.one, questionsData.quiz.question1)
});

test('Create a job', async () => {
    // Initialize the left menu page
    const leftMenu = pomanager.getLeftMenu();
    // Visiting job page
    await leftMenu.goToDashboard();
    await leftMenu.goToJobs();
    // Initialize the job page
    const job = pomanager.getJobPage();
    // Create a job post
    await job.createAJobPost(jobData.jobs.job1);
    // Visiting the created job post
    await job.viewCreatedJob();
})

test('Apply to a job', async () => {
    // Initialize the candidate and question data
    const candidate = candidatesData.candidates.candidateOne
    let screeningQuestion = questionsData.screening.question1;
    let quizQuestion = questionsData.quiz.question1;
    let question = { screeningQuestion, quizQuestion };
    // Initialize the apply page
    const applyPage = pomanager.getApplyPage();
    // If you wish to apply for a specific job, please provide a link to the job here.
    // await applyPage.goTo('')
    // Click on apply button
    await applyPage.clickApplyNow();
    // Login to account
    await applyPage.validLogin(candidate);
    // Apply to the job
    await applyPage.applyJob(candidate, question);
})

test('Preview the applied job', async () => {
    // Initialize the candidate and question data
    const candidate = candidatesData.candidates.candidateOne
    let screeningQuestion = questionsData.screening.question1;
    // Initialize the apply page
    const applyPage = pomanager.getApplyPage();
    // Reviewing the applied job post 
    await applyPage.preview(candidate, screeningQuestion);
})

test('Submit application', async () => {
    // Initialize the apply page
    const applyPage = pomanager.getApplyPage();
    // Submit job application
    await applyPage.submitApplication();
})

test('Preview success page', async () => {
    // Initialize the apply page
    const applyPage = pomanager.getApplyPage();
    // Check success page
    await applyPage.successPage();
})

test('Check notification of new applicant', async () => {
    // Initialize job and candidate data
    const job = jobData.jobs.job1.basic
    const candidate = candidatesData.candidates.candidateOne.basicInfo
    // Initialize login page
    const loginPage = pomanager.getLoginPage();
    // Visiting Login page
    await loginPage.goTo();
    // Make a valid login
    await loginPage.validLogin(mainUser)
    // Initialize notification page
    const notificationPage = pomanager.getNotificationPage();
    // Check notification information
    await notificationPage.checkNotificationFromMenuBar(candidate, job)
})

test('Check email of new applicant', async () => {
    // Initialize job and company data
    const job = jobData.jobs.job1.basic
    const company = companyData.company.one.basicInfo
    // Initialize email subject, from, and expected message
    const subject = `${job.title} has received a new application.`
    const from = 'no-reply@easy.jobs'
    const expectedMessage = `Hi, Your Job Opening for the position ${job.title} has received a new applicant. Click here to see the Application now. With best regards, ${company.title} © 2023 EasyJobs. All rights reserved.`
    // Reading email
    await readMails(subject, from, expectedMessage)
})

test('Check candidates profile information', async () => {
    // Initialize candidate and job data
    const candidate = candidatesData.candidates.candidateOne
    let job = jobData.jobs.job1.basic.title
    // Navigating to Cadidate Page
    const candidatePage = pomanager.getCandidatePage();
    const candidateProfilePage = pomanager.getCandidateProfilePage();
    // Selects a Candidate
    await candidatePage.goToCandidateProfile();
    await candidateProfilePage.viewCandidateInfo(candidate, job)
    await candidateProfilePage.viewApplicationTab(candidate)
})

test('Send candidate a message', async () => {
    // Initialize candidate, admin, company and job data
    const candidate = candidatesData.candidates.candidateOne.basicInfo
    const userAdmin = companyData.company.one.users.owner
    const company = companyData.company.one.basicInfo
    const job = jobData.jobs.job1.basic
    // Initialize email subject, from, and expected message
    const message = 'Hello, are you ready for your first interview?'
    const subject = `We have received your application`
    const from = 'no-reply@easy.jobs'
    const expectedMessage = `Hi ${candidate.firstName} ${candidate.lastName}, This is ${userAdmin.name} from ${company.title}. Your application for the position ${job.title} has been received. All applications will go through a rigorous screening process which has multiple steps. You will receive notifications regarding the next steps of our recruitment. Thanks for your interest, we look forward to getting to know you better! With best regards, ${userAdmin.name}`
    // Navigating to candidate profile Page
    const candidateProfilePage = pomanager.getCandidateProfilePage();
    // Sending message to candidate
    await candidateProfilePage.sendMessage(message);
    // Reading email
    await readMails(subject, from, expectedMessage)
})

test('Add a note', async () => {
    // Initialize candidate, admin and company data
    const userAdmin = companyData.company.one.users.owner
    // Navigating to Cadidate Page
    const candidatePage = pomanager.getCandidatePage();
    const candidateProfilePage = pomanager.getCandidateProfilePage();
    // Selects a Candidate Page
    await candidatePage.goToCandidateProfile();
    // Add a note
    await candidateProfilePage.addNote(userAdmin.name);
})