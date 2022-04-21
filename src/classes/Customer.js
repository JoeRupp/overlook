class Customer {
  constructor(customerData) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.roomBookings = [];
    this.totalSpent = 0;
  }

  getRoomBookings(bookingsRepo) {
    const findBookings = bookingsRepo.filter((booking) => {
      return booking.userId === this.id;
    })

    this.roomBookings = findBookings;
  }

  getTotalSpent() {
    const calculateTotalSpent = this.roomBookings.reduce((total, booking) => {
      total += booking.costPerNight;
      return total;
    }, 0)

    this.totalSpent = calculateTotalSpent;
  }
}

export default Customer;