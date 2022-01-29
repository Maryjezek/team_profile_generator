const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const engineer = new Engineer("mary", 8675309, "maryjezek@aol.com", "maryjezek");
  describe("properties", () => {
    test("creates an Engineer object", () => {
      //const Engineer = new Engineer('mary', 8675309, 'maryjezek@aol.com');
      expect(engineer.name).toBe("mary");
      expect(engineer.email).toBe("maryjezek@aol.com");
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.github).toEqual("maryjezek");
    });
  });

  describe("getName", () => {
    test("returns the Name", () => {
      expect(engineer.getName()).toBe("mary");
    });
  });

  describe("getID", () => {
    test("returns the ID", () => {
      expect(engineer.getId()).toBe(8675309);
    });
  });

  describe("getEmail", () => {
    test("returns email address", () => {
      expect(engineer.getEmail()).toBe("maryjezek@aol.com");
    });
  });

  describe("getGitHub", () => {
    test("returns github name", () => {
      expect(engineer.getGithub()).toBe("maryjezek");
    });
  });

});


