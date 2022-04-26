// IMPORTS
import { fetchAllData } from './apiCalls';
import { postData } from './apiCalls';
import BookingsRepo from '../src/classes/BookingsRepo';
import CustomerRepo from '../src/classes/CustomerRepo';
import domUpdates from "./domUpdates";
import dayjs from 'dayjs';
import './css/styles.css';
import './images/overlook-icon-03.png'

// GLOBAL VARIABLES
let customersData;
let roomsData;
let bookingsData;
let bookingsRepo;
let customerRepo;
let currentCustomer;

// QUERYSELECTORS
const signInBtn = document.querySelector('.sign-in-btn');
const signOutBtn = document.querySelector('.sign-out-btn');
const signInUserName = document.querySelector('#username');
const signInPassword = document.querySelector('#password');
const customerBookingsNavBtn = document.querySelector('.customer-bookings-nav-btn');
const customerBookRoomNavBtn = document.querySelector('.customer-book-room-nav-btn');
const managerDashboardNavBtn = document.querySelector('.manager-dashboard-nav-btn');
const managerBookingsNavBtn = document.querySelector('.manager-bookings-nav-btn');
const dateInput = document.querySelector('.date-selection');
const roomTypeInput = document.querySelector('.room-type-selection');
const filterRoomsBtn = document.querySelector('.filter-room-button');
const customerAvailableRoomsDisplay = document.querySelector('.customer-available-rooms');

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
  // ACCESSIBILITY TESTING _________________________________________________________
  currentCustomer = customerRepo.customerList[0]
  domUpdates.goToCustomerBookingsView();
  loadCustomer();
  loadAvailableRooms(bookingsRepo.getAvailableRooms(dayjs().format('YYYY/MM/DD')));
  // ACCESSIBILITY TESTING _________________________________________________________
}

const checkSignInCredentials = () => {
  const userNameInput = signInUserName.value;
  const userPasswordInput = signInPassword.value;
  const idInput = userNameInput.replace('customer', '');
  let userNameExists = false;

  customerRepo.customerList.forEach((customer) => {
    if (`customer${customer.id}` === userNameInput) {
      userNameExists = true;
    }
  })

  if (userNameExists === true && userPasswordInput === 'overlook2021') {
    getCustomer(idInput);
    domUpdates.goToCustomerBookingsView();
    loadCustomer();
    loadAvailableRooms();
    domUpdates.removeSignInError();
  } else if (userNameInput === 'manager' && userPasswordInput === 'overlook2021') {
    domUpdates.goToManagerDashboardView();
    loadManager();
    managerLoadAvailableRooms();
    domUpdates.removeSignInError();
  } else {
    domUpdates.displaySignInError();
  }
}

const getCustomer = (idInput) => {
  const findCustomer = customerRepo.customerList.filter((customer) => {
    return customer.id === idInput*1;
  })
  currentCustomer = findCustomer[0];
}

const loadCustomer = () => {
  currentCustomer.getRoomBookings(bookingsRepo.allBookingsList);
  currentCustomer.getTotalSpent();
  domUpdates.displayCustomerName(currentCustomer.name);
  domUpdates.displayCustomerBookings(currentCustomer.roomBookings);
  domUpdates.displayCustomerTotalBookings(currentCustomer.roomBookings.length);
  domUpdates.displayCustomerTotalSpent(currentCustomer.totalSpent);
}

const loadAvailableRooms = () => {
  domUpdates.displayAvailableRooms(bookingsRepo.getAvailableRooms(dayjs().format('YYYY/MM/DD')));
  domUpdates.setCurrentDate(dayjs().format('YYYY-MM-DD'));
}

const managerLoadAvailableRooms = () => {
  domUpdates.displayAllCustomers(customerRepo.customerList);
  domUpdates.managerDisplayAvailableRooms(bookingsRepo.getAvailableRooms(dayjs().format('YYYY/MM/DD')));
  domUpdates.managerSetCurrentDate(dayjs().format('YYYY-MM-DD'));
}

const filterRooms = () => {
  let roomList;
  if (roomTypeInput.value === 'all') {
    roomList = bookingsRepo.getAvailableRooms(dayjs(dateInput.value).format('YYYY/MM/DD'));
  } else {
    roomList = bookingsRepo.filterRoomByType(roomTypeInput.value, dayjs(dateInput.value).format('YYYY/MM/DD'));
  }
  domUpdates.displayAvailableRooms(roomList);
}

const createBookingInfo = (roomInfo) => {
  return {
    userID: currentCustomer.id, 
    date: dayjs(dateInput.value).format('YYYY/MM/DD'),
    roomNumber: roomInfo.number
  }
}

const loadManager = () => {
  domUpdates.displayTodaysDate(dayjs().format('MMMM D, YYYY'));
  domUpdates.displayTotalRoomsAvailableToday(bookingsRepo.getAvailableRooms(dayjs().format('YYYY/MM/DD')).length);
  const getTotalCost = bookingsRepo.getBookedRooms(dayjs().format('YYYY/MM/DD')).reduce((total, booking) => {
    total += booking.costPerNight;
    return total;
  }, 0).toFixed(2);
  domUpdates.displayTotalRevenueForToday(getTotalCost);
  domUpdates.displayPercentRoomsOccupied(((bookingsRepo.getBookedRooms(dayjs().format('YYYY/MM/DD')).length)/25));
}

// EVENTLISTENERS
signInBtn.addEventListener('click', checkSignInCredentials);
signOutBtn.addEventListener('click', domUpdates.goToSignInView);
customerBookingsNavBtn.addEventListener('click', domUpdates.goToCustomerBookingsView);
customerBookRoomNavBtn.addEventListener('click', domUpdates.goToCustomerBookRoomView);
managerDashboardNavBtn.addEventListener('click', domUpdates.goToManagerDashboardView);
managerBookingsNavBtn.addEventListener('click', domUpdates.goToManagerBookingsView);
filterRoomsBtn.addEventListener('click', filterRooms);

customerAvailableRoomsDisplay.addEventListener('click', function(event) {
  if (event.target.classList[1] === 'book-room-btn') {
    roomsData.forEach((room) => {
      if (room.number === event.target.id * 1) {
        const newBooking = createBookingInfo(room);
        postData(newBooking)
        .then(() => {
          fetchAllData().then((data) => {
            customersData = data[0].customers;
            roomsData = data[1].rooms;
            bookingsData = data[2].bookings;
            bookingsRepo = new BookingsRepo(bookingsData, roomsData)
            loadCustomer();
            filterRooms();
          })
        })
      }
    })
  }   
});