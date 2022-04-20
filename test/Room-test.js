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

    room = new Room(roomData);
  })

  it("Should be a function", () => {
    expect(Room).to.be.a("function");
  });

  it("Should be an instance of Room", () => {
    expect(room).to.be.an.instanceOf(Room);
  });

  it("Should have a room number", () => {
    expect(room.number).to.be.equal(1);
  });

  it("Should have a room type", () => {
    expect(room.roomType).to.be.equal("residential suite");
  });

  it("Should say if it has bidet or not", () => {
    expect(room.bidet).to.be.equal(true);
  });

  it("Should have a bed size", () => {
    expect(room.bedSize).to.be.equal("queen");
  });

  it("Should have the number of beds", () => {
    expect(room.numBeds).to.be.equal(1);
  });

  it("Should have a cost per night", () => {
    expect(room.costPerNight).to.be.equal(358.4);
  });
});