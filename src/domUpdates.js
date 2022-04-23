const nav = document.querySelector('nav');
const customerNav = document.querySelector('.customer-nav');
const managerNav = document.querySelector('.manager-nav');
const customerView = document.querySelector('.customer-view');
const customerDashboard = document.querySelector('.customer-dashboard');
const customerBookRoom = document.querySelector('.customer-book-a-room');
const managerView = document.querySelector('.manager-view');
const signInView = document.querySelector('.login-view');
const aside = document.querySelector('aside');

const customerBookingsNavBtn = document.querySelector('.customer-bookings-nav-btn');
const customerBookRoomNavBtn = document.querySelector('.customer-book-room-nav-btn');
const managerDashboardNavBtn = document.querySelector('.manager-dashboard-nav-btn');
const managerBookingsNavBtn = document.querySelector('.manager-bookings-nav-btn');

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

  },

  goToManagerBookingsView() {

  }


}

export default domUpdates;