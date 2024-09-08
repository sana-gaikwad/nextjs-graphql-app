import { test, expect } from "@playwright/test";

test("can navigate to the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Rick and Morty/);
  await expect(page.getByText(/Welcome/)).toBeVisible();
});

test("can enter user details and continue to character dashboard", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText(/Welcome/);
  const usernameInput = page.getByPlaceholder("Enter your username here...");
  const jobTitle = page.getByPlaceholder("Enter your job title here...");
  const submitButton = page.getByRole("button", { name: "Save & Continue" });
  await usernameInput.fill("Test User");
  await jobTitle.fill("Software Developer");
  await submitButton.click();

  await expect(page).toHaveURL("/characters");
  await expect(page.getByText(/Test User/)).toBeVisible();
  await expect(page.getByText(/Software Developer/)).toBeVisible();
});
