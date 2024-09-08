import { test, expect } from "@playwright/test";

test("can navigate to the characters page", async ({ page }) => {
  await page.goto("/characters");
  await expect(page.getByText(/Welcome/)).toBeVisible();
});

test("can edit user details and continue to character dashboard", async ({
  page,
}) => {
  await page.goto("/characters");
  await expect(page.getByText(/Welcome/)).toBeVisible();
  const editButton = page.getByRole("link", { name: "Edit details" });
  await editButton.click();

  await expect(page).toHaveURL("/");
  const usernameInput = page.getByPlaceholder("Enter your username here...");
  const jobTitle = page.getByPlaceholder("Enter your job title here...");
  const submitButton = page.getByRole("button", { name: "Save & Continue" });
  await usernameInput.fill("Test User Edited");
  await jobTitle.fill("Software Developer Edited");
  await submitButton.click();

  await expect(page).toHaveURL("/characters");
  await expect(page.getByText(/Test User Edited/)).toBeVisible();
  await expect(page.getByText(/Software Developer Edited/)).toBeVisible();
});
