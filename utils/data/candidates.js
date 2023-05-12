import { users } from "../credentials"

export const  candidates = () =>  {
    let user = users().users;
    let candidates = {
        candidateOne : {
            credentials : {
                email : user.one.email,
                password : user.one.password
            },
            basicInfo : {
                firstName : 'John',
                lastName : 'Kibria',
                phoneNumber : '011234567890',
                nationality : 'Bangladeshi',
                nationalID : '54322345678887654',
                gender : 'Male',
                DOB : {
                    year : '1997',
                    month : 'Jan',
                    date : '26'
                }
            },
            education : {
                0 : {
                    level : 'Bachelor of Science',
                    degree : 'B.Sc in Computer Science & Engineering',
                    year : '2017',
                    institute : 'American International University Bangladesh'
                },
            },
            company : {
                0 : {
                    name : 'WPDeveloper',
                    designation : 'QA Engineer',
                    department : 'SQA',
                    employement : {
                        start : {
                            year : '2020',
                            month : 'Jul',
                            date : '1'
                        },
                        end : {
                            year : '2022',
                            month : 'Jun',
                            date : '28'
                        },
                        currentlyWorking : false
                    },
                    responsibilities : "It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English."
                }
            },
            salary : {
                currentSalary : '248900',
                expectedSalary : '278900'
            },
            social : {
                linkedin : 'https://www.linkedin.com/in/islamdshariful/',
                facebook : 'https://web.facebook.com/islammdshariful.sabbir/?_rdc=1&_rdr'
            },
            documents : {
                coverLetter : " It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English.",
                photo : "./utils/files/images/profile-3.jpg",
                resume : "./utils/files/documents/resume-4.pdf",
                hasRusumeLink : false,
                resumeLink : "https://www.canva.com/design/DAFHhz-O2w4/jTv5CJvMjCH4mDsWn53mMQ/view?utm_content=DAFHhz-O2w4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            },
            evaluation : {
                screening : 'all-true',
                quiz : 'all-true'
            }
        },
        candidateTwo : {
            credentials : {
                email : user.two.email,
                password : user.two.password
            },
            basicInfo : {
                firstName : 'Sami',
                lastName : 'Cobet',
                phoneNumber : '01234765890',
                nationality : 'Bangladeshi',
                nationalID : '54322345988887654',
                gender : 'Male',
                DOB : {
                    year : '1995',
                    month : 'Oct',
                    date : '20'
                }
            },
            education : {
                0 : {
                    level : 'Bachelor of Science',
                    degree : 'B.Sc in Computer Science & Engineering',
                    year : '2017',
                    institute : 'American International University Bangladesh'
                }
            },
            company : {
                0 : {
                    name : 'WPDeveloper',
                designation : 'QA Engineer',
                department : 'SQA',
                employement : {
                    start : {
                        year : '2020',
                        month : 'Jul',
                        date : '1'
                    },
                    end : {
                        year : '2022',
                        month : 'Jun',
                        date : '28'
                    },
                    currentlyWorking : false
                },
                responsibilities : "It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English."
                }
            },
            salary : {
                currentSalary : '248900',
                expectedSalary : '278900'
            },
            social : {
                linkedin : 'https://www.linkedin.com/in/islamdshariful/',
                facebook : 'https://web.facebook.com/islammdshariful.sabbir/?_rdc=1&_rdr'
            },
            documents : {
                coverLetter : " It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English.",
                photo : "./utils/files/images/profile-3.jpg",
                resume : "./utils/files/documents/resume-4.pdf",
                hasRusumeLink : false,
                resumeLink : "https://www.canva.com/design/DAFHhz-O2w4/jTv5CJvMjCH4mDsWn53mMQ/view?utm_content=DAFHhz-O2w4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            },
            evaluation : {
                screening : 'all-false',
                quiz : 'all-false'
            }
        },
        candidateThree : {
            credentials : {
                email : user.three.email,
                password : user.three.password
            },
            basicInfo : {
                firstName : 'Bob',
                lastName : 'Foket',
                phoneNumber : '01339765890',
                nationality : 'Bangladeshi',
                nationalID : '543223459543677',
                gender : 'Male',
                DOB : {
                    year : '1992',
                    month : 'Aug',
                    date : '18'
                }
            },
            education : {
                0 : {
                    level : 'Bachelor of Science',
                    degree : 'B.Sc in Computer Science & Engineering',
                    year : '2017',
                    institute : 'American International University Bangladesh'
                }
            },
            company : {
                0 : {
                    name : 'WPDeveloper',
                    designation : 'QA Engineer',
                    department : 'SQA',
                    employement : {
                        start : {
                            year : '2020',
                            month : 'Jul',
                            date : '1'
                        },
                        end : {
                            year : '2022',
                            month : 'Jun',
                            date : '28'
                        },
                        currentlyWorking : false
                    },
                    responsibilities : "It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English."
                }
            },
            salary : {
                currentSalary : '248900',
                expectedSalary : '278900'
            },
            social : {
                linkedin : 'https://www.linkedin.com/in/islamdshariful/',
                facebook : 'https://web.facebook.com/islammdshariful.sabbir/?_rdc=1&_rdr'
            },
            documents : {
                coverLetter : " It's a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, opposed to using 'Content here, content here, making it look like readable English.",
                photo : "./utils/files/images/profile-3.jpg",
                resume : "./utils/files/documents/resume-4.pdf",
                hasRusumeLink : false,
                resumeLink : "https://www.canva.com/design/DAFHhz-O2w4/jTv5CJvMjCH4mDsWn53mMQ/view?utm_content=DAFHhz-O2w4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            },
            evaluation : {
                screening : 'average',
                quiz : 'average'
            }
        }
    }
    
    return {
        candidates
    }
}