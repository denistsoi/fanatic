const puppeteer = require('puppeteer');
const CREDS     = require("./config");

const USERNAME_SELECTOR = "#se-login-fields #email";
const PASSWORD_SELECTOR = "#se-login-fields #password";
const BUTTON_SELECTOR   = "#se-login-fields #submit-button";

const SOURCE = "https://stackoverflow.com/users/login?ssrc=head";

const fanatic = async (options) => {
  console.group(`fanatic-${new Date().toISOString()}`)
  const browser = await puppeteer.launch(options);
  const page =    await browser.newPage();

  console.log("go to page")
  await page.goto(SOURCE, { timeout: 0 })
  
  console.log("username")
  await page.click(USERNAME_SELECTOR)
  await page.keyboard.type(CREDS.USERNAME);

  console.log("pass")
  await page.click(PASSWORD_SELECTOR)
  await page.keyboard.type(CREDS.PASSWORD);

  console.log("submit")
  await page.click(BUTTON_SELECTOR);
  
  console.log("waiting") 
  await page.waitForNavigation({ timeout: 0 });

  console.log("finished login") 
  await page.waitFor(5000);
  console.groupEnd(`fanatic-${new Date().toISOString()}`)
  await browser.close();
}

module.exports = fanatic;