import { expect } from "chai";
import Customer from "../src/classes/Customer";

describe('Customer Tests', function() {
  let customer;
  let customerData;
  let bookingsRepo;

  beforeEach(() => {
    customerData = {
      id: 1,
      name: "Leatha Ullrich"
      },

      bookingsRepo = [
      {
        number: 15,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
        bookingId: "5fwrgu4i7k55hl6sz",
        userId: 1,
        date: "2022/04/22"
      },
      {
        number: 24,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
        id: "5fwrgu4i7k55hl6t5",
        userId: 3,
        date: "2022/01/24"
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 491.14,
        id: "5fwrgu4i7k55hl6t6",
        userId: 1,
        date: "2022/01/10",
      }
    ],

    customer = new Customer(customerData)
  })

  it("Should be a function", () => {
    expect(Customer).to.be.a("function");
  });

  it("Should be an instance of Customer", () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it("Should have an id", () => {
    expect(customer.id).to.be.equal(1);
  });

  it("Should have a name", () => {
    expect(customer.name).to.be.equal("Leatha Ullrich");
  });

  it("Should have an array of room bookings that starts empty", () => {
    expect(customer.roomBookings).to.be.an("array");
    expect(customer.roomBookings.length).to.be.equal(0);
  });

  it("Should have a total amount spent that starts at 0", () => {
    expect(customer.totalSpent).to.be.equal(0);
  });

  it("Should have a method to find all room bookings for that customer only and assign it to the customer's roomBookings", () => {
    customer.getRoomBookings(bookingsRepo);

    expect(customer.roomBookings.length).to.be.equal(2);
    expect(customer.roomBookings[0].number).to.be.equal(15);
    expect(customer.roomBookings[1].date).to.be.equal('2022/01/10');
  });

  it("Should have a method calculate total amount spent on bookings", () => {
    customer.getRoomBookings(bookingsRepo);
    customer.getTotalSpent();

    expect(customer.totalSpent).to.be.equal(849.54);
  });

});