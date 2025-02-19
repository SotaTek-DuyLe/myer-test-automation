import { Locator, Page } from "@playwright/test";

export class LoginPage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.emailInput = page.getByRole("textbox", { name: 'Email address' });
        this.passwordInput = page.getByRole("textbox", { name: 'Password' });
        this.signInButton = page.getByRole("button", { name: 'Sign In' });
    }

    async inputEmailAndPassword(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }
}
