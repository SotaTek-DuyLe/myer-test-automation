import { expect, Locator, Page } from "@playwright/test";

export class ChangePasswordPage {
    private readonly currentPasswordInput: Locator;
    private readonly newPasswordInput: Locator;
    private readonly saveChangesButton: Locator;
    private readonly backToAccountButton: Locator;

    constructor(page: Page) {
        this.currentPasswordInput = page.getByRole('textbox', { name: 'Current Password' });
        this.newPasswordInput = page.getByRole('textbox', { name: 'New Password' });
        this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
        this.backToAccountButton = page.getByRole('button', { name: 'Back to Account Settings' });
    }

    async updatePassword(currentPassword: string, newPassword: string) {
        await this.currentPasswordInput.fill(currentPassword);
        await this.newPasswordInput.fill(newPassword);
        await this.saveChangesButton.click();
        await expect(this.saveChangesButton).toBeDisabled({ timeout: 10000 });
    }

    async clickBackToAccountSettings() {
        await this.backToAccountButton.click();
    }
}