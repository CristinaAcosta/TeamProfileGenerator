const Manager = require("../lib/Manager");

test("getRole() testing to see if it actually returns manager", () => {
  const testValue = "Manager";
  const actualValue = new Manager("Foo", 1, "test@test.com", testValue);
  expect(actualValue.getRole()).toBe(testValue);
})

