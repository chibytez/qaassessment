import { expect, test, Locator, Page} from  "@playwright/test";

export  class DashboardPage {
    readonly page: Page;
    readonly tableItems: Locator

    constructor(page: Page) {
        this.page = page;
        this.tableItems = page.locator('tr').nth(1)
    }

    async  assertValues(title: string, description: string, price: string, rating: string){
        await expect(this.tableItems).toContainText(
            title, description, price, rating
        )
    }


}