class Room {
  constructor(roomData, bookingsData) {
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    this.bidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds;
    this.costPerNight = roomData.costPerNight;
    this.bookingId = bookingsData.id;
    this.userId = bookingsData.userID;
    this.bookingDate = bookingsData.date;
    this.betterBookingDate = this.getBetterDate();
  }

  getBetterDate() {
    const date = new Date(this.bookingDate)
    return date.getTime();
  }
}

export default Room;