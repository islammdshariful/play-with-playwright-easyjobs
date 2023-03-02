export const questionsSets = () =>  {
    let sets = {
        screening : {
            one : {
                type : 'Screening',
                name : 'Alpha',
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                instruction : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            },
            two : {
                type : 'Screening',
                name : 'Gamma',
                description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                instruction : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            }
        },
        quiz : {
            one : {
                type : 'Quiz',
                name : 'Beta',
                description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                instruction : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            },
            two : {
                type : 'Quiz',
                name : 'Gonna',
                description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
                instruction : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        }
        
    }

    return {
        sets
    }
}

export const  questions = () =>  {
    let screening = {
        question1 : {
            0 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Alpha? - 1',
                options : {
                    0 : 'A Version Name - 1',
                    1 : 'A Robot Name - 1',
                },
                correct : {
                    0 : 0
                },
                wrong: {
                    0 : 1
                }
            },
            1 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Beta? - 2',
                options : {
                    0 : 'A Version Name - 2',
                    1 : 'A Robot Name - 2',
                },
                correct : {
                    0 : 1
                },
                wrong: {
                    0 : 0
                }
            },
            2 : {
                type : 'Text',
                name : 'What is Pre-Beta? - 3',
                answer: 'A second-class mark given for a piece of work or an examination paper. - 3'
            },
            3 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Gamma? - 4',
                options : {
                    0 : 'A Version Name - 4',
                    1 : 'A Robot Name - 4',
                },
                correct : {
                    0 : 1
                },
                wrong: {
                    0 : 0
                }
            },
            4 : {
                type : 'Text',
                name : 'What is Pre-Gamma? - 5',
                answer: 'A second-class mark given for a piece of work or an examination paper. - 5'
            },
            5 : {
                type : 'Text',
                name : 'What is Pre-Alpha? - 6',
                answer: 'A second-class mark given for a piece of work or an examination paper. - 6'
            },
            6 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Final-Gamma? - 7',
                options : {
                    0 : 'A Version Name - 7',
                    1 : 'A Robot Name - 7',
                },
                correct : {
                    0 : 0
                },
                wrong: {
                    0 : 1
                }
            },
        },
        question2 : {
            0 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Alpha? - 8',
                options : {
                    0 : 'A Version Name - 8',
                    1 : 'A Robot Name - 8',
                },
                correct : {
                    0 : 1
                },
                wrong: {
                    0 : 0
                }
            }
        }
    }

    let quiz  = {
        question1 : {
            0 : {
                forQuiz : true,
                type : 'Multiple Choice',
                name : 'What is Alpha? - 9',
                options : {
                    0 : 'A Version Name - 9',
                    1 : 'A Robot Name - 9',
                },
                correct : {
                    0 : 0
                },
                wrong: {
                    0 : 1
                }
            },
            1 : {
                forQuiz : true,
                type : 'Multiple Choice',
                name : 'What is Beta? -10',
                options : {
                    0 : 'A Version Name - 10',
                    1 : 'A Robot Name - 10',
                },
                correct : {
                    0 : 1
                },
                wrong: {
                    0 : 0
                }
            },
            2 : {
                forQuiz : true,
                type : 'Multiple Choice',
                name : 'What is Gamma? - 11',
                options : {
                    0 : 'A Version Name - 11',
                    1 : 'A Robot Name - 11',
                },
                correct : {
                    0 : 1
                },
                wrong: {
                    0 : 0
                }
            },
            3 : {
                forQuiz : true,
                type : 'Multiple Choice',
                name : 'What is Final-Gamma? - 12',
                options : {
                    0 : 'A Version Name -12',
                    1 : 'A Robot Name -12',
                },
                correct : {
                    0 : 0
                },
                wrong: {
                    0 : 1
                }
            },
        },
        question2 : {
            0 : {
                forQuiz : false,
                type : 'Multiple Choice',
                name : 'What is Alpha? -13',
                options : {
                    0 : 'A Version Name -13',
                    1 : 'A Robot Name -13',
                },
                correct : {
                    0 : 0
                },
                wrong: {
                    0 : 1
                }
            }
        }
    }

    return {
        screening,
        quiz
    }
}