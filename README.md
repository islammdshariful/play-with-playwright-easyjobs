# Playwright Test Automation Framework ([easy.jobs](https://app.easy.jobs))
This is a Playwright-based test automation framework written in JavaScript, designed to simplify browser testing. It includes reusable utilities, supports multi-browser testing, and generates reports. It uses Page Object Model for maintainability and flexibility.

_Note: This project is currently ongoing, and plan to add more test cases in the near future._

## Getting Started

### Prerequisites
- Node.js v14 or later

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
```sh
npm install
npx install playwright
```
3. To create credentials and a token for Gmail, please refer to the [documentation](https://www.npmjs.com/package/gmail-tester) for Gmail Tester. Once you have created these, place them in the following directories: `utils/mails/gmail-credentials.json` and `utils/mails/gmail-token.json`.
4. Create a `credentials.js` file in `utils/credentials.js`.
```sh
export const  users = () =>  {
    let users = {
        main : {
            email : '[companyadmin@email.com]',
            password : '[companyadminpassword]'
        },
        one : {
            email : '[candidate@email.com]',
            password : '[candidatepassword]'
        }
    }
    
    return {
        users
    }
}
```
5. Set your company name in `utils/data/company.js`
```sh
export const  companies = () =>  {
    let company = {
        one : {
            basicInfo : {
                title : '[yourcompanyname]',
            },
            users: {
                owner: {
                    name: '[ownername]',
                    email: '[owneremail]',
                    role: 'Administrator'
                }
            }
        }
    }

    return {
        company
    }
}
```

### Running Tests
To run tests, use the following command:
```sh
npx playwright test
```
To run only in chrome browser, use the follwing commnad:
```sh
npm run onchrome  
```
This will run all tests located in the `tests` directory.

### Generating Reports
To generate an HTML report of test results, use the following command:
```sh
npx playwright show-report
```
This will generate a report located in the reports directory.

## Contributing
Contributions to this repository are welcome. If you find any issues or have any suggestions for improvements, please submit a pull request or create an issue.
