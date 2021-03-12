const Intern = require("../lib/Intern");

test("getRole() testing to return intern", () => {
  const testValue = "Intern";
  const actualValue = new Intern("Foo", 1, "test@test.com", testValue);
  expect(actualValue.getRole()).toBe(testValue);
})