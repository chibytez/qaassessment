import { expect, test, Locator, Page} from  "@playwright/test"

export class LoginPage {
    readonly page: Page;
    readonly usernameTxt : Locator;
    readonly passwordTxt : Locator;
    readonly loginBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameTxt = page.locator("#username")
        this.passwordTxt = page.locator("#password")
        this.loginBtn = page.getByRole('button', { name: 'Login' })
    }

    async inputUsername(value: string) {
        await this.usernameTxt.fill(value)
    }

    async inputPassword(value:string) {
        await this.passwordTxt.fill(value)
    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }

    async assertUrl(value: string) {
        await expect(this.page).toHaveURL(value)
    }

    async assertNoUrl(value: string) {
        await expect(this.page).not.toHaveURL(value)
    }
}