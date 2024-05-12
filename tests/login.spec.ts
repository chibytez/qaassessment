import {test,expect } from "@playwright/test";
import {LoginPage} from "../Pages/LoginPage"
import TestData from "../TestData/testData.json" ;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login Test', () => {
    test('Verify that user can login with a valid username and password', async ({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.inputUsername(TestData.username)
        await loginPage.inputPassword(TestData.password)
        await loginPage.clickLoginBtn()
        await loginPage.assertUrl(TestData.url)
    })

    test('Verify that the username field is required', async ({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.inputUsername("")
        await loginPage.inputPassword(TestData.password)
        await loginPage.clickLoginBtn()
        await loginPage.assertNoUrl(TestData.url)
    })

    test('Verify that user can not leave the password field empty', async ({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.inputUsername(TestData.username)
        await loginPage.inputPassword("")
        await loginPage.clickLoginBtn()
        await loginPage.assertNoUrl(TestData.url)
    })
})