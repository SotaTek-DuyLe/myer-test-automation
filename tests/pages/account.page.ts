import { expect, Locator, Page } from "@playwright/test";

export class AccountPage {
    private readonly changePasswordButton: Locator;
    private readonly emailInput: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly dobInput: Locator;
    private readonly addressInput: Locator;
    private readonly mobileInput: Locator;
    private readonly updateButton: Locator;

    constructor(page: Page) {
        this.changePasswordButton = page.getByRole('button', { name: 'Change password' });
        this.emailInput = page.getByRole('textbox', { name: 'Email Address' });;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.dobInput = page.getByRole('textbox', { name: 'Date Of Birth' });
        this.addressInput = page.getByRole('textbox', { name: 'Address Finder' });
        this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number' });
        this.updateButton = page.getByRole('button', { name: 'Update' });
    }

    async clickChangePassword() {
        await this.changePasswordButton.click();
    }

    async verifyAccountSettingPageVisible() {
        await expect(this.changePasswordButton).toBeVisible();
        await expect(this.emailInput).not.toBeEditable();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.dobInput).not.toBeEditable();
        await expect(this.addressInput).toBeVisible();
        await expect(this.mobileInput).toBeVisible();
    }

    async clickUpdate() {
        await this.updateButton.click();
    }

    async updateLastName(value: string) {
        await this.lastNameInput.fill(value);
    }

    async updateMobileNumber(value: string) {
        await this.mobileInput.fill(value);
    }
}