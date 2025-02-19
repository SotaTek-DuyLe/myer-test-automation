import { expect, Locator, Page } from "@playwright/test";

export class MenuBar {
    private readonly signInJoinButton: Locator;
    private readonly signInButton: Locator;
    private readonly accountButton: Locator;
    private readonly myAccountButton: Locator;
    private readonly accountSettingsButton: Locator;
    private readonly signOutButton: Locator;

    constructor(page: Page) {
        this.signInJoinButton = page.getByRole("button", { name: 'Sign In / Join' });
        this.signInButton = page.getByRole("link", { name: 'Sign In' });
        this.accountButton = page.getByRole('button', { name: 'Account' });
        this.myAccountButton = page.getByRole('link', { name: 'My Account' });
        this.accountSettingsButton = page.getByRole('button', { name: 'Account Settings' });
        this.signOutButton = page.getByRole('link', { name: 'Sign Out' });
    }

    async clickSignIn() {
        await this.signInJoinButton.click();
        await this.signInButton.click();
    }

    async verifyAccountButtonVisible() {
        await expect(this.accountButton).toBeVisible({ timeout: 10000 });
    }

    async clickAccount() {
        await this.accountButton.click();
    }

    async clickMyAccount() {
        await this.myAccountButton.click();
    }

    async clickAccountSettings() {
        await this.accountSettingsButton.click();
    }

    async clickSignOut() {
        await this.signOutButton.click();
    }
}