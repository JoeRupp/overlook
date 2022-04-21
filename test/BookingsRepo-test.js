import { expect } from "chai";
import BookingsRepo from "../src/classes/BookingsRepo";

describe('BookingsRepo Tests', function() {
  let bookingsRepo;


  beforeEach(() => {
    bookingsRepo = new BookingsRepo();
  });

  it("Should be a function", () => {
    expect(BookingsRepo).to.be.a("function");
  });

  it("Should be an instance of BookingsRepo", () => {
    expect(bookingsRepo).to.be.an.instanceOf(BookingsRepo);
  });

});