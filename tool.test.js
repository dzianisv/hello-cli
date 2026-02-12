const { spawnSync } = require("child_process");

describe("CLI Output Test", () => {
  test("should print 'Hello, World!'", () => {
    const result = spawnSync("node", ["tool.js"], { encoding: "utf-8" });
    expect(result.stdout.trim()).toBe("Hello, World!");
  });
});