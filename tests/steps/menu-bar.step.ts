import { setDefaultTimeout, When } from "@cucumber/cucumber";
import { MenuBar } from "../pages/menu-bar.page";

setDefaultTimeout(30000);

When("I go to 'Account Settings'", async function () {
    const menuBar = new MenuBar(this.page);
    await menuBar.clickAccount();
    await menuBar.clickMyAccount();
    await menuBar.clickAccountSettings();
});

When("I log out", async function () {
    const menuBar = new MenuBar(this.page);
    await menuBar.clickAccount();
    await menuBar.clickSignOut();
});

