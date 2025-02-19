import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page, chromium, expect } from "@playwright/test";

// Import Playwright Config manually
import config from "../../dist/playwright.config.js";


export class CustomWorld extends World {
    browser!: Browser;
    page!: Page;

    async openBrowser() {
        this.browser = await chromium.launch(config.use?.launchOptions ?? {});
        const context = await this.browser.newContext({ viewport: null });
        this.page = await context.newPage();
        await this.page.goto('https://www.myer.com.au/');
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async verifyTextBoxValue(textBoxName: string, expectedValue: string) {
        await expect(this.page.getByRole("textbox", { name: textBoxName })).toHaveText(expectedValue, { timeout: 12000 });
    }

    async sleep(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}

// Register the custom World
setWorldConstructor(CustomWorld);
