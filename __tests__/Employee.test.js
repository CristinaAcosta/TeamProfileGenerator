const Engineer = require("../lib/Engineer");

test("getRole() testing to see if it actually returns \"Engineer\"", () => {
  //define the test value, "Engineer"
  const testValue = "Engineer";
  const actualValue = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(actualValue.getRole()).toBe(testValue);
})

