import { expect } from "chai";
import Customer from "../src/classes/Customer";

describe('Customer Tests', function() {
  let customer;
  let customerData;

  beforeEach(() => {
    customerData = {
      id: 1,
      name: "Leatha Ullrich"
      }

    customer = new Customer(customerData);
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
});