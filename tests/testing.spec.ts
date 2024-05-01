import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Layout test", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Game of the Week", exact: true })
  ).toBeVisible();
  await expect(page.getByText("Not quite game of the year,")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
});
