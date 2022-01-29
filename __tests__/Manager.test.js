const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager.js");

describe("manager", () => {
  const manager = new Manager("mary", 8675309, "maryjezek@aol.com", "102");
  describe("properties", () => {
    test("creates an manager object", () => {
      //const manager = new manager('mary', 8675309, 'maryjezek@aol.com');
      expect(manager.name).toBe("mary");
      expect(manager.email).toBe("maryjezek@aol.com");
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.officeNumber).toBe("102");
    });
  });

  describe("getName", () => {
    test("returns the Name", () => {
      expect(manager.getName()).toBe("mary");
    });
  });

  describe("getID", () => {
    test("returns the ID", () => {
      expect(manager.getId()).toBe(8675309);
    });
  });

  describe("getEmail", () => {
    test("returns email address", () => {
      expect(manager.getEmail()).toBe("maryjezek@aol.com");
    });
  });

  describe("getOfficeNumber", () => {
    test("returns officeNumber", () => {
      expect(manager.getOfficeNumber()).toBe("102");
    });
  });

});


