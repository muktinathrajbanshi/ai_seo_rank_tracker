import { chromium } from "playwright-core";
import Browserbase from "@browserbasehq/sdk";

const bb = new Browserbase({
  apiKey: process.env.BROWSERBASE_API_KEY,
});

// Search Google for a keyword and extract ranking results for a target domain 
export async function rankTracker(keyword, targetDomain) {
    let browser;
    try {
      // 1. Initialize Browserbase Session & Connect Playwright
      const session = await bb.sessions.create({browserSettings: {blockAds: true}});
      browser = await chromium.connectOverCDP(session.connectUrl)
      const page = browser.contexts()[0].pages()[0];
      page.setDefaultNavigationTimeout(45000);

      // 2. Initial Google Visit & Consent Handling
      await page.goto("https://www.google.com", {waitUntil: "networkidle"});
      try {
        const btn = await page.$('button[id="L2AGLb"], font[action*="consent"] button')
        if (btn) {
          await btn.click();
          await page.waitForTimeout(1500);
        }
      } catch { }

      let found = null,
        allResults = [];

      const cleanTarget = targetDomain.replace("www.", "").toLowerCase();
      
      // 3. Search Loop: Iterate through up to 5 pages of Google results
      for (let gPage = 0; gPage < 5; gPage++) {
        await page.goto()
      }

    } catch (error) {
      
    }
}