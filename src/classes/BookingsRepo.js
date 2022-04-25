import Room from "./Room";

class BookingsRepo {
  constructor(bookingsData, roomsData) {
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
    this.allBookingsList = this.createAllBookingsList();
  }

  createAllBookingsList() {
    const createBooking = this.bookingsData.reduce((list, booking) => {
      this.roomsData.forEach((room) => {
        if (booking.roomNumber === room.number) {
          list.push(new Room(room, booking));
        }
      })
      return list;
    }, []);

    return createBooking.sort((a, b) => {
      return b.betterBookingDate - a.betterBookingDate;
    })
  }

  getBookedRooms(date) {
    const findBookings = this.allBookingsList.filter((booking) => {
      return booking.bookingDate === date
    });

    return findBookings;
  }

  getAvailableRooms(date) {
    const bookedRooms = this.getBookedRooms(date).map((booking) => booking.number);

    const findRooms = this.roomsData.reduce((list, room) => {
      if (!bookedRooms.includes(room.number)) {
        list.push(room);
      } 
      return list;
    }, []);
    
    return findRooms;
  }

  filterRoomByType(type, date) {
    const availableRooms = this.getAvailableRooms(date)

    const findRoomsByType = availableRooms.filter((room) => {
      return room.roomType === type;
    });

    return findRoomsByType;
  }

  bookARoom(roomInfo, bookingInfo) {
    const newBooking = new Room(roomInfo, bookingInfo)
    this.allBookingsList.unshift(newBooking)
  }
};

export default BookingsRepo;