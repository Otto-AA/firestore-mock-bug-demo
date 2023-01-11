const { mockFirebase } = require("firestore-jest-mock");
const { mockCollection } = require("firestore-jest-mock/mocks/firestore");
const { createCollection } = require("./api");

mockFirebase();

it("should be able to require firebase", () => {
  expect(() => require.resolve("firebase")).not.toThrow();
});

it("should call collection with 'users'", () => {
  createCollection();

  expect(mockCollection).toHaveBeenCalledWith("users");
});
