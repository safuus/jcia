import { test, expect } from "@playwright/test";

test.describe("Smoke tests — all pages load", () => {
  test("homepage renders key sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("New Category");
    await expect(page.locator("text=Start a Project")).toBeVisible();
    await expect(page.locator("text=Enroll a Student")).toBeVisible();
    // FAQ section
    await expect(page.locator("text=Common questions")).toBeVisible();
    // Contact form
    await expect(page.locator("text=Get in Touch")).toBeVisible();
  });

  test("services page renders", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText("What we build");
    await expect(page.locator("text=For Clients")).toBeVisible();
    await expect(page.locator("text=For Students")).toBeVisible();
  });

  test("about page renders", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1")).toContainText("Built by builders");
    await expect(page.locator("text=Colin Li")).toBeVisible();
    await expect(page.locator("text=CodingMind Academy")).toBeVisible();
  });

  test("apply page renders", async ({ page }) => {
    await page.goto("/apply");
    await expect(page.locator("h1")).toContainText("Ready to build");
    await expect(page.locator("text=Submit Application")).toBeVisible();
  });

  test("blog page renders", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toContainText("Ideas, updates");
    await expect(page.locator("text=AI-Native Education")).toBeVisible();
  });

  test("blog post renders", async ({ page }) => {
    await page.goto("/blog/why-ai-native-education");
    await expect(page.locator("h1")).toContainText("AI-Native Education");
    await expect(page.locator("text=Back to Blog")).toBeVisible();
  });

  test("nav links work", async ({ page }) => {
    await page.goto("/");
    await page.click('nav a[href="/services"]');
    await expect(page).toHaveURL("/services");

    await page.click('nav a[href="/about"]');
    await expect(page).toHaveURL("/about");

    await page.click('nav a[href="/blog"]');
    await expect(page).toHaveURL("/blog");

    await page.click('nav a[href="/apply"]');
    await expect(page).toHaveURL("/apply");
  });
});
