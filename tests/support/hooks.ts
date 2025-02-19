import { Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "./world";

Before(async function (this: CustomWorld) {
    await this.openBrowser();
});

After(async function (this: CustomWorld) {
    await this.closeBrowser();
});
