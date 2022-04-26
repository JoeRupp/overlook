import { expect } from "chai";
import CustomerRepo from "../src/classes/CustomerRepo";
import Customer from "../src/classes/Customer";

describe('CustomerRepo Tests', function() {
  let customerRepo;
  let customerData;

  beforeEach(() => {
    customerData = [
      {
        id: 1,
        name: "Leatha Ullrich"
      },
      {
        id: 2,
        name: "Rocio Schuster"
      },
      {
        id: 3,
        name: "Kelvin Schiller"
      },
      {
        id: 4,
        name: "Kennedi Emard"
      }
    ],

    customerRepo = new CustomerRepo(customerData)
  })

  it("Should be a function", () => {
    expect(CustomerRepo).to.be.a("function");
  });

  it("Should be an instance of CustomerRepo", () => {
    expect(customerRepo).to.be.an.instanceOf(CustomerRepo);
  });

  it("Should have a method that creates an array of Cutomer instances and stores them", () => {
    expect(customerRepo.customerList).to.an("array");
    expect(customerRepo.customerList.length).to.equal(4);
    expect(customerRepo.customerList[0]).to.an.instanceOf(Customer);
    expect(customerRepo.customerList[3].name).to.equal("Kennedi Emard");
  });
});