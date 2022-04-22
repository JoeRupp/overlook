// IMPORTS
import { fetchAllData } from './apiCalls';
import BookingsRepo from '../src/classes/BookingsRepo';
import CustomerRepo from '../src/classes/CustomerRepo';
import './css/styles.css';
import './images/OverLook-icon-03.png'
// import './images/OverLook_Logo-antler.svg';

// GLOBAL VARIABLES
let customersData;
let roomsData;
let bookingsData;
let bookingsRepo;
let customerRepo;
let currentCustomer;
let currentManager;

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