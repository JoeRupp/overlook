// IMPORTS
import { fetchAllData } from './apiCalls';
import BookingsRepo from '../src/classes/BookingsRepo';
import CustomerRepo from '../src/classes/CustomerRepo';
import './css/styles.css';
import './images/overlook-icon-03.png'
import domUpdates from "./domUpdates";
// import './images/OverLook_Logo-antler.svg';

// GLOBAL VARIABLES
let customersData;
let roomsData;
let bookingsData;
let bookingsRepo;
let customerRepo;
let currentCustomer;
let currentManager;

// QUERYSELECTORS
const signInBtn = document.querySelector('.sign-in-btn');
const signOutBtn = document.querySelector('.sign-out-btn');
const customerBookingsNavBtn = document.querySelector('.customer-bookings-nav-btn');
const customerBookRoomNavBtn = document.querySelector('.customer-book-room-nav-btn');
const managerDashboardNavBtn = document.querySelector('.manager-dashboard-nav-btn');
const managerBookingsNavBtn = document.querySelector('.manager-bookings-nav-btn');
const bookNowBtn = document.querySelector('.book-room-btn');
const deleteBookingBtn = document.querySelector('.delete-booking-btn');
const managerBookRoomView = document.querySelector('.manager-book-room-btn');
const managerCustomerBookingsView = document.querySelector('.manager-customer-bookings-btn');

// FUNCTIONS

fetchAllData().then((data) => {
  customersData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
  startOverlookApplication();
});

const startOverlookApplication = () => {
  bookingsRepo = new BookingsRepo(bookingsData, roomsData);
  customerRepo = new CustomerRepo(customersData);
}

// EVENTLISTENERS

// signInBtn.addEventListener("click", checkSignInCredentials);
signOutBtn.addEventListener("click", domUpdates.goToSignInView);
customerBookingsNavBtn.addEventListener("click", domUpdates.goToCustomerBookingsView);
customerBookRoomNavBtn.addEventListener("click", domUpdates.goToCustomerBookRoomView);
managerDashboardNavBtn.addEventListener("click", domUpdates.goToManagerDashboardView);
managerBookingsNavBtn.addEventListener("click", domUpdates.goToManagerBookingsView);