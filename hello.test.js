const { execSync } = require("child_process");
const path = require("path");

describe("hello.js CLI", () => {
  const helloScript = path.resolve(__dirname, "./hello.js");

  it("should print 'Hello, World!'", () => {
    const output = execSync(`node ${helloScript}`).toString().trim();
    expect(output).toBe("Hello, World!");
  });
});