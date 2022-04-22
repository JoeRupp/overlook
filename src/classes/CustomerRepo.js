import Customer from "./Customer";
class CustomerRepo {
  constructor(customerData) {
    this.customerData = customerData;
    this.customerList = this.createCustomerList();
  }

  createCustomerList() {
    const createCustomer = this.customerData.map((customer) => {
      return new Customer(customer);
    })

    return createCustomer;
  }
}

export default CustomerRepo;