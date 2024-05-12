import {test,expect } from "@playwright/test";
import { DashboardPage } from "../Pages/DashboardPage";
import {LoginPage} from "../Pages/LoginPage"
import TestData from "../TestData/testData.json" ;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Dashboard Test', () => {
    test('Verify that user can view dashboard after successfully logging in with a username and password', async ({page}) => {
        const loginPage = new LoginPage(page)
        const dashboardPage = new DashboardPage(page)
        await loginPage.inputUsername(TestData.username)
        await loginPage.inputPassword(TestData.password)
        await loginPage.clickLoginBtn()
        await dashboardPage.assertValues(
            TestData.title, 
            TestData.description, 
            TestData.price, 
            TestData.rating
        )
    })

})