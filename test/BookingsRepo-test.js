import { expect } from "chai";
import BookingsRepo from "../src/classes/BookingsRepo";
import Room from "../src/classes/Room";

describe('BookingsRepo Tests', function() {
  let bookingsRepo;
  let bookingsData;
  let roomsData;


  beforeEach(() => {
    bookingsData =  [
      {
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2022/04/22",
        roomNumber: 1
      },
      {
        id: "5fwrgu4i7k55hl6t5",
        userID: 43,
        date: "2022/01/24",
        roomNumber: 2
      },
      {
        id: "5fwrgu4i7k55hl6t6",
        userID: 13,
        date: "2022/01/10",
        roomNumber: 3
      },
      {
        id: "5fwrgu4i7k55hl6t7",
        userID: 20,
        date: "2022/02/16",
        roomNumber: 4
      }
    ]

    roomsData = [
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44
      }
    ]

    bookingsRepo = new BookingsRepo(bookingsData, roomsData);
  });

  it("Should be a function", () => {
    expect(BookingsRepo).to.be.a("function");
  });

  it("Should be an instance of BookingsRepo", () => {
    expect(bookingsRepo).to.be.an.instanceOf(BookingsRepo);
  });

  it("Should take in bookings data and store it", () => {
    expect(bookingsRepo.bookingsData).to.deep.equal(bookingsData);
  });

  it("Should take in room data and store it", () => {
    expect(bookingsRepo.roomsData).to.deep.equal(roomsData);
  });

  it("Should have a method to create Rooms using the data stored on instanation", () => {
    expect(bookingsRepo.allBookingsList).to.an("array");
    expect(bookingsRepo.allBookingsList.length).to.equal(4);
    expect(bookingsRepo.allBookingsList[0]).to.an.instanceOf(Room);
    expect(bookingsRepo.allBookingsList[3].bookingId).to.equal('5fwrgu4i7k55hl6t7');
  });

  it("Should have a method that returns a list of booked rooms on a particular date", () => {
    const bookedRoom = bookingsRepo.getBookedRooms("2022/04/22")
    const bookedRoomTwo = bookingsRepo.getBookedRooms("2023/01/01")

    expect(bookedRoom[0].bookingId).to.equal("5fwrgu4i7k55hl6sz");
    expect(bookedRoomTwo.length).to.equal(0);
  });

  it("Should have a method that returns a list of available rooms on a particular date", () => {
    const availableRooms = bookingsRepo.getAvailableRooms("2022/04/22")

    expect(availableRooms.length).to.equal(3);
    expect(availableRooms[0].number).to.equal(2);
  });

  it("Should have a method that returns a list of available rooms based on room type", () => {
    const availableRooms = bookingsRepo.getAvailableRooms("2022/04/22")

    expect(availableRooms.length).to.equal(3);
    expect(availableRooms[0].number).to.equal(2);
  });

  it("Should have a method that returns a list of available rooms based on room type", () => {
    const singleRooms = bookingsRepo.filterRoomByType("single room", "2022/06/27")

    expect(singleRooms.length).to.equal(2);
    expect(singleRooms[0].number).to.equal(3);
  });

  it("Should have a method that allows a room to be booked", () => {
    const roomInfo = roomsData[2]
    const newBookingInfo = {
      id: "test12345",
      userID: 1,
      date: "2022/06/21",
      roomNumber: 4
    }

    bookingsRepo.bookARoom(roomInfo, newBookingInfo)

    expect(bookingsRepo.allBookingsList.length).to.equal(5);
    expect(bookingsRepo.allBookingsList[4].bookingId).to.equal("test12345");
  });
});