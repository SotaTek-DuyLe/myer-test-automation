import { setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import path from "path";
import fs from "fs";
import { generateRandomMobileNumber, generateRandomName, generateRandomPassword } from "../utils/string-util";
import { AccountPage } from "../pages/account.page";
import { ChangePasswordPage } from "../pages/change-password.page";
import { CustomWorld } from "../support/world";

setDefaultTimeout(30000);

When("I should see Account settings page", async function () {
    const accountPage = new AccountPage(this.page);
    await accountPage.verifyAccountSettingPageVisible();
});

When('I change Password to {string}', async function (newPassword: string) {
    // Read password from user-data.json
    const filePath = path.join(__dirname, "../test-data/user-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const userData = JSON.parse(fileContent);

    // Handle new password
    if (newPassword == 'random') {
        newPassword = generateRandomPassword(10);
        console.log(`New passsword created: ${newPassword}`);
    }

    const accountPage = new AccountPage(this.page);
    const changePasswordPage = new ChangePasswordPage(this.page);
    await accountPage.clickChangePassword();
    await changePasswordPage.updatePassword(userData.password, newPassword);

    // Save new password to json file
    userData.email = userData.email;
    userData.password = newPassword;
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 2), 'utf-8');
    console.log('User data file updated successfully!');

    await changePasswordPage.clickBackToAccountSettings();
});

When('I change Last Name to {string}', async function (lastName: string) {
    if (lastName == 'random') {
        lastName = generateRandomName(5);
        console.log(`New Last Name created: ${lastName}`);
    }
    const accountPage = new AccountPage(this.page);
    await accountPage.updateLastName(lastName);
});

When('I change Mobile Number to {string}', async function (phoneNumber: string) {
    if (phoneNumber == 'random') {
        phoneNumber = generateRandomMobileNumber();
        console.log(`New Mobile Number created: ${phoneNumber}`);
    }
    const accountPage = new AccountPage(this.page);
    await accountPage.updateMobileNumber(phoneNumber);
});

When("I click 'Update'", async function () {
    const accountPage = new AccountPage(this.page);
    await accountPage.clickUpdate();
})

Then('I should see {string} as {string}', async function (this: CustomWorld, textBoxName: string, expectedValue: string) {
    await this.verifyTextBoxValue(textBoxName, expectedValue);
})

