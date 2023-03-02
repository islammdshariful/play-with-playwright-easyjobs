import { questionsSets, questions } from './questions';

export const  jobs = () =>  {
    const qSets = questionsSets()
    let jobs = {
        job1 : {
            basic : {
                title : 'QA Automation Engineer',
                details : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                responsibilities : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                calegory : 'Software Quality Assurance & Testing',
                vacancies : '5',
                jobtypes : 'On-site',
                country : 'Bangladesh',
                state : 'Dhaka',
                city : 'Mirpur DOHS',
                expiryDate : {
                    year : '2023',
                    month : 'Apr',
                    date : '28'
                },
                skills : {
                    0 : 'Software automation testing',
                    1 : 'SQA',
                    2 : 'Bug/Issue reporting',
                    3 : 'Trello',
                    4 : 'Javascript'
                },
            },
            employment : {
                employmentType : 'Full Time',
                experience : 'Senior',
                salaryType : 'Monthly',
                salary : '295000',
                officeTime : 'SUN - THU: 8:00 AM to 4:00 PM',
                onBoard : true,
                showBenefits : true,
            },
            banner : {
                image : './utils/files/images/banner-1.jpg'
            },
            screening : {
                hasScreening : true,
                screeningQuestionSet : qSets.sets.screening.one.name,
            },
            quiz : {
                hasQuiz : true,
                quizSet : qSets.sets.quiz.one.name,
                duration : '3',
                mark : '5',
            }
        },
        job2 : {
            basic : {
                title : 'Full Stack Developer',
                details : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                responsibilities : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                calegory : 'Full Stack',
                vacancies : '2',
                jobtypes : 'Remote',
                country : 'Bangladesh',
                state : 'Dhaka',
                city : 'Mirpur DOHS',
                expiryDate : {
                    year : '2023',
                    month : 'Apr',
                    date : '28'
                },
                skills : {
                    0 : 'AWS',
                    1 : 'Vue.js/React.js',
                    2 : 'Laravel',
                    3 : 'REST API',
                    4 : 'Database',
                    5 : 'WordPress'
                },
            },
            employment : {
                employmentType : 'Full Time',
                experience : 'Senior',
                salaryType : 'Monthly',
                salary : '295000',
                officeTime : 'SUN - THU: 8:00 AM to 4:00 PM',
                onBoard : true,
                showBenefits : true,
            },
            banner : {
                image : './utils/files/images/banner-3.jpg'
            },
            screening : {
                hasScreening : true,
                screeningQuestionSet : qSets.sets.screening.one.name,
            },
            quiz : {
                hasQuiz : true,
                quizSet : qSets.sets.quiz.one.name,
                duration : '3',
                mark : '5',
            }
        }
    }

    return {
        jobs
    }
}