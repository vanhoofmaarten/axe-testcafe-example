import { Selector } from "testcafe";
import { axeCheck } from "axe-testcafe";
import createAxeAssertionMessage from "../lib/createAxeAssertionMessage";

const views = [
  {
    name: "mrtnvh",
    href: "https://mrtnvh.com",
  },
  {
    name: "rockxxl",
    href: "https://rockxxl.netlify.app",
  },
];

views.forEach((view) => {
  fixture(view.name).page(view.href);

  test("a11y", async (t) => {
    const { error, violations } = await axeCheck(t);
    await t
      .expect(violations.length === 0)
      .ok(createAxeAssertionMessage(violations));
  });
});
