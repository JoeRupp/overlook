class Customer {
  constructor(customerData) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.roomBookings = [];
    this.totalSpent = 0;
  }

  getRoomBookings(bookingsData) {
    const findBookings = bookingsData.filter((booking) => {
      return booking.userID === this.id;
    })

    this.roomBookings = findBookings
  }

  getTotalSpent(roomRepo) {
    const calculateTotalSpent = this.roomBookings.reduce((total, booking) => {
      roomRepo.forEach((room) => {
        if (room.number === booking.roomNumber) {
          total += room.costPerNight
        }
      })
      return total
    }, 0)

    this.totalSpent = calculateTotalSpent
  }
}

export default Customer;