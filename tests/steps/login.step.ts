import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import path from "path";
import fs from "fs";
import { MenuBar } from "../pages/menu-bar.page";
import { LoginPage } from "../pages/login.page";

setDefaultTimeout(30000);

Given("I log in with given account", async function () {
    // Read credentials from user-data.json
    const filePath = path.join(__dirname, "../test-data/user-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const userData = JSON.parse(fileContent);
    const email: string = userData.email;
    const password: string = userData.password;

    const menuBar = new MenuBar(this.page);
    const loginPage = new LoginPage(this.page);
    await menuBar.clickSignIn();
    await loginPage.inputEmailAndPassword(email, password);
    await loginPage.clickSignIn();
    await menuBar.verifyAccountButtonVisible();
});

