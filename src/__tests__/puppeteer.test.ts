import * as puppeteer from 'puppeteer';
import itemStore from '../stores/ItemStore';

const URL = 'http://localhost:3000';
let page: puppeteer.Page;
let browser: puppeteer.Browser;

jest.setTimeout(8000);
// Mock data
itemStore.addToProductList({id: 1, itemDescription: "Sue", itemName: "Pizzaen", price: 85});

beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

describe(`Testing marios pizza with puppeteer`, () => {
  test(`Test page loads`, async () => {
    await page.goto(URL);
    expect(await itemExists('.merio')).toBe(true);
  });

  test(`Test add to cart`, async () => {
    await page.goto(URL);
    const waitResult = await itemExists(`.addcartbutton1`) && await itemExists(`.cartcard`);
    expect(waitResult).toBe(true);
    // Check cart is empty
    expect(await getCartContentLength()).toBe(0);
    // Add pizza
    await page.click(`.addcartbutton1`);
    // Check cart isn't empty
    expect(await getCartContentLength()).toBe(1);
  });
});

async function getCartContentLength(){
  const cssSelector = ".cartitems";
  await page.waitForSelector(cssSelector);
  // tslint:disable-next-line:no-shadowed-variable
  const result = await page.evaluate((cssSelector: string) => {
    const querySelection = document.querySelector(cssSelector);
    if (querySelection){
      return querySelection.children.length;
    }
    return 0;
  }, cssSelector);
  return result;
};

async function itemExists(cssSelector: string){
  await page.waitForSelector(cssSelector);
  // tslint:disable-next-line:no-shadowed-variable
  const result = await page.evaluate((cssSelector: string) => {
    return document.querySelector(cssSelector) !== null;
  }, cssSelector);
  return result === true;
};