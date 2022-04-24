const nav = document.querySelector('nav');
const customerNav = document.querySelector('.customer-nav');
const managerNav = document.querySelector('.manager-nav');
const customerView = document.querySelector('.customer-view');
const customerDashboard = document.querySelector('.customer-dashboard');
const customerBookRoom = document.querySelector('.customer-book-a-room');
const managerView = document.querySelector('.manager-view');
const managerDashboard = document.querySelector('.manager-dashboard');
const managerBookRoom = document.querySelector('.manager-customer-bookings');
const signInView = document.querySelector('.login-view');
const aside = document.querySelector('aside');

const customerBookingsNavBtn = document.querySelector('.customer-bookings-nav-btn');
const customerBookRoomNavBtn = document.querySelector('.customer-book-room-nav-btn');
const managerDashboardNavBtn = document.querySelector('.manager-dashboard-nav-btn');
const managerBookingsNavBtn = document.querySelector('.manager-bookings-nav-btn');

const customerNameDisplay = document.querySelector('.customer-name');
const customerTotalBookingsDisplay = document.querySelector('.customer-total-bookings');
const customerTotalSpentDisplay = document.querySelector('.customer-total-spent');
const customerBookingsDisplay = document.querySelector('.customer-bookings');
const availableRoomDisplay = document.querySelector('.customer-available-rooms');

let domUpdates = {

  goToSignInView() {
    nav.classList.add('collapsed');
    customerView.classList.add('collapsed');
    managerView.classList.add('collapsed');
    signInView.classList.remove('collapsed');
    aside.classList.add('collapsed');
  },

  goToCustomerBookingsView() {
    nav.classList.remove('collapsed');
    customerNav.classList.remove('collapsed');
    managerNav.classList.add('collapsed');
    customerView.classList.remove('collapsed');
    customerDashboard.classList.remove('collapsed');
    customerBookRoom.classList.add('collapsed');
    managerView.classList.add('collapsed');
    signInView.classList.add('collapsed');
    aside.classList.remove('collapsed');
    customerBookingsNavBtn.classList.add('selected-state');
    customerBookRoomNavBtn.classList.remove('selected-state');
  },

  goToCustomerBookRoomView() {
    nav.classList.remove('collapsed');
    customerNav.classList.remove('collapsed');
    managerNav.classList.add('collapsed');
    customerView.classList.remove('collapsed');
    customerDashboard.classList.add('collapsed');
    customerBookRoom.classList.remove('collapsed');
    managerView.classList.add('collapsed');
    signInView.classList.add('collapsed');
    aside.classList.remove('collapsed');
    customerBookingsNavBtn.classList.remove('selected-state');
    customerBookRoomNavBtn.classList.add('selected-state');
  },

  goToManagerDashboardView() {
    nav.classList.remove('collapsed');
    customerNav.classList.add('collapsed');
    managerNav.classList.remove('collapsed');
    customerView.classList.add('collapsed');
    managerView.classList.remove('collapsed');
    managerDashboard.classList.remove('collapsed');
    managerBookRoom.classList.add('collapsed');
    signInView.classList.add('collapsed');
    aside.classList.remove('collapsed');
    managerDashboardNavBtn.classList.add('selected-state');
    managerBookingsNavBtn.classList.remove('selected-state');
  },

  goToManagerBookingsView() {
    nav.classList.remove('collapsed');
    customerNav.classList.add('collapsed');
    managerNav.classList.remove('collapsed');
    customerView.classList.add('collapsed');
    managerView.classList.remove('collapsed');
    managerDashboard.classList.add('collapsed');
    managerBookRoom.classList.remove('collapsed');
    signInView.classList.add('collapsed');
    aside.classList.remove('collapsed');
    managerDashboardNavBtn.classList.remove('selected-state');
    managerBookingsNavBtn.classList.add('selected-state');
  },

  displayCustomerName(customerName) {
    customerNameDisplay.innerHTML = customerName
  },

  displayCustomerBookings(customerRoomBookings) {
    const displayBookings = customerRoomBookings.map((eachBooking) => {
      const bookingPreview = `
      <section class="booking-preview" id="${eachBooking.bookingId}">
      <div class="room-info"><p class="room-num">Room ${eachBooking.number} - ${eachBooking.roomType}</p></div>
      <div class="room-info"><p>${eachBooking.bedSize} (${eachBooking.numBeds})</p></div>
      <div class="room-info"><p>$${eachBooking.costPerNight}</p></div>
      <div class="room-info"><p>${eachBooking.bookingDate}</p></div>
      </section>`
      return bookingPreview
    }).join('')
    customerBookingsDisplay.innerHTML = displayBookings
  },

  displayCustomerTotalBookings(customerRoomBookingsLength) {
    customerTotalBookingsDisplay.innerHTML = customerRoomBookingsLength
  },

  displayCustomerTotalSpent(customerTotalSpent) {
    customerTotalSpentDisplay.innerHTML = customerTotalSpent
  },

  displayAvailableRooms(roomList) {
    const displayAvailableRooms = roomList.map((eachRoom) => {
      const bookingPreview = `
      <section class="booking-preview">
      <div class="room-info"><p class="room-num">Room ${eachRoom.number} - ${eachRoom.roomType}</p></div>
      <div class="room-info"><p>${eachRoom.bedSize} (${eachRoom.numBeds})</p></div>
      <div class="room-info"><p>$${eachRoom.costPerNight} /night</p></div>
      <div class="room-info"><button class="btn book-room-btn" id="${eachRoom.number}">Book</div>
      </section>`
      return bookingPreview
    }).join('')
    availableRoomDisplay.innerHTML = displayAvailableRooms
  }

}

export default domUpdates;