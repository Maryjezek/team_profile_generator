const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern.js");

describe("intern", () => {
  const intern = new Intern("mary", 8675309, "maryjezek@aol.com", "harvard");
  describe("properties", () => {
    test("creates an intern object", () => {
      //const intern = new intern('mary', 8675309, 'maryjezek@aol.com');
      expect(intern.name).toBe("mary");
      expect(intern.email).toBe("maryjezek@aol.com");
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.school).toBe("harvard");
    });
  });

  describe("getName", () => {
    test("returns the Name", () => {
      expect(intern.getName()).toBe("mary");
    });
  });

  describe("getID", () => {
    test("returns the ID", () => {
      expect(intern.getId()).toBe(8675309);
    });
  });

  describe("getEmail", () => {
    test("returns email address", () => {
      expect(intern.getEmail()).toBe("maryjezek@aol.com");
    });
  });

  describe("getSchool", () => {
    test("returns School", () => {
      expect(intern.getSchool()).toBe("harvard");
    });
  });
});
