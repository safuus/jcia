import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("shows audience selector and conditional fields", async ({ page }) => {
    await page.goto("/#contact");

    // Default audience is Client
    await expect(page.locator('button:has-text("Client")')).toHaveClass(/bg-blue-600/);

    // Client fields visible
    await expect(page.locator("#projectType")).toBeVisible();
    await expect(page.locator("#timeline")).toBeVisible();

    // Switch to Partner
    await page.click('button:has-text("Partner")');
    await expect(page.locator("#orgName")).toBeVisible();
    await expect(page.locator("#projectType")).not.toBeVisible();

    // Switch to Student — shows redirect
    await page.click('button:has-text("Student")');
    await expect(page.locator("text=Go to Application")).toBeVisible();
  });

  test("shows validation on empty required fields", async ({ page }) => {
    await page.goto("/#contact");

    // Try to submit empty form — HTML5 validation should prevent submission
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // The form shouldn't submit — name field should be invalid
    const nameInput = page.locator("#name");
    const isInvalid = await nameInput.evaluate(
      (el) => !(el as HTMLInputElement).validity.valid
    );
    expect(isInvalid).toBe(true);
  });

  test("FAQ accordion expands and collapses", async ({ page }) => {
    await page.goto("/");

    // Find first FAQ button
    const firstQuestion = page.locator('button[aria-expanded]').first();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");

    // Click again to collapse
    await firstQuestion.click();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });
});
