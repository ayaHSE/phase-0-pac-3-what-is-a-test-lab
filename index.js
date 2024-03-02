describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan"); // Update the expected value to "Susan"
    });
  });
  
  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeLessThan(40); // Update the expected value to be less than 40
      expect(height).toBeGreaterThan(0); // Add an assertion to check if height is greater than 0
    });
  });
  