const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  const employee = new Employee("mary", 8675309, "maryjezek@aol.com");
  describe("properties", () => {
    test("creates an employee object", () => {
      //const employee = new Employee('mary', 8675309, 'maryjezek@aol.com');
      expect(employee.name).toBe("mary");
      expect(employee.email).toBe("maryjezek@aol.com");
      expect(employee.id).toEqual(expect.any(Number));
    });
  });

  describe("getName", () => {
    test("returns the Name", () => {
      expect(employee.getName()).toBe("mary");
    });
  });

  describe("getID", () => {
    test("returns the ID", () => {
      expect(employee.getId()).toBe(8675309);
    });
  });

  describe("getEmail", () => {
    test("returns email address", () => {
      expect(employee.getEmail()).toBe("maryjezek@aol.com");
    });
  });
});
