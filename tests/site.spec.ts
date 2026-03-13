import { expect, test } from "@playwright/test";

const pages = [
  { path: "/claw-ecosystem", title: "The Claw Ecosystem: where MaxClaw fits in 2026" },
  { path: "/maxclaw-vs-openclaw", title: "MaxClaw vs OpenClaw: managed cloud versus self-hosted control" },
  { path: "/maxclaw-vs-kimiclaw", title: "MaxClaw vs KimiClaw: two cloud AI agents with different priorities" },
  { path: "/maxclaw-vs-zeroclaw", title: "MaxClaw vs ZeroClaw: managed cloud simplicity versus Rust-native efficiency" },
  { path: "/maxclaw-vs-picoclaw", title: "MaxClaw vs PicoClaw: cloud AI agent versus edge and embedded deployment" },
  { path: "/minimax-ai", title: "MiniMax AI: the company behind MaxClaw" },
  { path: "/minimax-m25-model", title: "MiniMax M2.5: the model powering MaxClaw" },
  { path: "/get-started", title: "MaxClaw launch status" },
];

test("homepage renders key sections and metadata", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("[data-testid='hero-title']")).toBeVisible();
  await expect(page.locator("[data-testid='primary-cta']")).toBeVisible();
  await expect(page.locator("[data-testid='features-section']")).toBeVisible();
  await expect(page.locator("[data-testid='faq-section']")).toBeVisible();
  await expect(page).toHaveTitle(/MaxClaw/);

  const canonical = page.locator("link[rel='canonical']");
  await expect(canonical).toHaveAttribute("href", /^https:\/\/maxclaw\.lol\/?$/);

  const description = page.locator("meta[name='description']");
  await expect(description).toHaveAttribute("content", /cloud-hosted AI agent/i);

  await expect(page.locator("link[rel='manifest']")).toHaveAttribute(
    "href",
    /manifest\.webmanifest$/,
  );
  await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
    "content",
    /\/opengraph-image$/,
  );
  await expect(page.locator("meta[name='twitter:card']")).toHaveAttribute(
    "content",
    "summary_large_image",
  );

  const ldJson = page.locator("script[type='application/ld+json']");
  await expect(ldJson).toHaveCount(1);
  const schemaText = await ldJson.first().textContent();
  expect(schemaText).toContain("SoftwareApplication");
  expect(schemaText).toContain("FAQPage");
  expect(schemaText).toContain("WebSite");
  expect(schemaText).toContain("Organization");
});

test("global navigation exposes all core routes", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page.locator("a[href]").evaluateAll((elements) =>
    elements.map((element) => element.getAttribute("href")).filter(Boolean),
  );

  for (const route of pages) {
    expect(hrefs).toContain(route.path);
  }
});

test.describe("content pages", () => {
  for (const route of pages) {
    test(`renders ${route.path}`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page.locator(`[data-testid='page-title-${route.path.slice(1)}']`)).toBeVisible();
      await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
        "href",
        new RegExp(`${route.path}$`),
      );
      await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
        "content",
        new RegExp(`${route.path}/opengraph-image$`),
      );
    });
  }
});

test("mobile viewport keeps layout usable and avoids horizontal page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.locator("[data-testid='hero-title']")).toBeVisible();

  const hasOverflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth > window.innerWidth + 1;
  });

  expect(hasOverflow).toBeFalsy();
});

test("launch status CTA and footer links remain reachable", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Launch Status" }).first().click();
  await expect(page).toHaveURL("/get-started");

  await page.getByRole("link", { name: "Homepage" }).click();
  await expect(page).toHaveURL("/");
});
