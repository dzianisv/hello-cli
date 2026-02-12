const { execSync } = require('child_process');

// Test script for hello.js
describe("hello.js", () => {
  test("prints 'Hello, World!' to the console", () => {
    const output = execSync("node ./hello.js", { encoding: "utf-8" });
    expect(output.trim()).toBe("Hello, World!");
  });
});