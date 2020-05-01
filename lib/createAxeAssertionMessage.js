const { red, green, grey } = require("chalk");

const createViolationMessage = ({ id, description, helpUrl, impact, nodes }) =>
  [
    "",
    red(id),
    red(description),
    grey(`Source: ${helpUrl}`),
    grey(`Impact: ${impact}`),
    grey(
      `Targets: ${nodes
        .reduce((acc, node) => [...acc, ...node.target], [])
        .join(", ")}`
    ),
  ].join("\n");

const createAxeAssertionMessage = (violations) => {
  if (!violations.length) {
    return green("No a11y violations found");
  }

  return [
    `Found ${violations.length} a11y violations:`,
    ...violations.map(createViolationMessage),
    "\n",
  ].join("\n");
};

module.exports = createAxeAssertionMessage;
