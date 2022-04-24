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

    this.roomBookings = findBookings
    // .sort((a, b) => {
    //   a.bookingDate - b.bookingDate
    // })
  }

  getTotalSpent() {
    const calculateTotalSpent = this.roomBookings.reduce((total, booking) => {
      total += booking.costPerNight;
      return total;
    }, 0)

    this.totalSpent = calculateTotalSpent.toFixed(2)
  }
}

export default Customer;