import { check_inbox } from "gmail-tester"
import { resolve } from "path"
import { expect } from '@playwright/test';


const inboxChecker = async(subject, from) => {
  const email = await check_inbox(
    resolve("./utils/mails/gmail-credentials.json"),
    resolve("./utils/mails/gmail-token.json"),
    {
      subject: subject,
      from: from, 
      wait_time_sec: 10,
      max_wait_time_sec: 30,
      include_body: true
    }
  )

  if (email){
      return email
  } else{
      return "No email was found."
  }
}

const getBodyText = (html) => {
  const $ = require('cheerio').load(html)
  $('body').find('br').replaceWith(' ')
  return $('body').text()
}

const readMails = async(subject, from, expectedMessage) => {
  let emails = await inboxChecker(subject, from)
  const emailBodyHtml = emails[0].body.html //get body
  const actualMessage = getBodyText(emailBodyHtml)
  expect.soft(actualMessage.replace(/\s+/g, ' ').trim()).toEqual(expectedMessage)
  console.log(actualMessage.replace(/\s+/g, ' ').trim())
}



export {readMails}