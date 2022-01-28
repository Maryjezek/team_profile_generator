const { TestScheduler } = require("jest");
const Algo = require("../Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should get the name", () => {
      const emp = new Employee();
      const getName = new getName("Mary");
      expect(getName).toEqual("Mary");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is not a number", () => {
      const cb = () => new Employee("2");
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is less than 0", () => {
      const cb = () => new Employee( -1);
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });
  });
});
