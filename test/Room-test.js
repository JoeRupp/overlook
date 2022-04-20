import { expect } from "chai";
import Room from "../src/classes/Room";

describe('Room Tests', function() {
  let room;
  let roomData;

  beforeEach(() => {
    roomData = {
      number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
      }

    room = new Room();
  })

  it("Should be a function", () => {
    expect(Room).to.be.a("function");
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(room).to.be.an.instanceOf(Room);
  });
});