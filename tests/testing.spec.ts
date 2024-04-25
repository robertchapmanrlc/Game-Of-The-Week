import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Layout test", async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Game of the Week' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Game 1' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Game 2' })).toBeVisible();
  await expect(page.getByTestId('Game 1 Vote')).toBeVisible();
  await expect(page.getByTestId("Game 2 Vote")).toBeVisible();
});
