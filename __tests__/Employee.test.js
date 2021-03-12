const Employee = require("../lib/Employee");

test("getRole() testing to see if it actually returns employee", () => {
  const testValue = "Employee";
  const actualValue = new Employee("Foo", 1, "test@test.com", testValue);
  expect(actualValue.getRole()).toBe(testValue);
})

