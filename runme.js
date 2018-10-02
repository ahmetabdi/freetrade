const puppeteer = require('puppeteer');
const faker = require('faker');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (i = 0; i < 9999999; i++) {
    await page.goto('https://freetrade.io?kid=RVCAP', {waitUntil: 'networkidle2'});
    await page.mainFrame().type('.input', faker.internet.email());
    await page.click('.et_pb_contact_submit')
    console.log('click')
  }

  await browser.close();
})();
