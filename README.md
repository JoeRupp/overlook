# OverLook Hotel 🏔

### Overview:
The OverLook Hotel is a solo Front-end project from the Mod 2 curriculum at Turing School of Software & Design. This project's goal was to build a hotel management application in seven days for hotel customers and staff to manage room bookings and calculate customer bills. Upon starting the application, a  log in screen for customers and management will be displayed, while a series of requests will happen in the background to gather necessary data. Logging into the application using the correct credentials will load the customer/management dashboard, where the user can view past bookings, see total cost, book rooms, etc.

![sign in preview](https://media.giphy.com/media/4IvFOpUWMgmPrsXBp9/giphy.gif)
![user dashboard](https://media.giphy.com/media/znYuBx2qBhZ8CuXxIX/giphy.gif)
![filtering and booking a room](https://media.giphy.com/media/LocCiw1HvNHKUf6zqa/giphy.gif)

### Technologies:
- Javascript
- CSS
- HTML
- Webpack
- NPM
- Mocha/Chai
- Lighthouse/WAVE
- Adobe Illustrator/Photoshop/XD

### Set Up:
1. Clone this repo to your local machine.
2. `cd` into the directory.
3. Run `npm install`.
4. Run `npm start`. 
5. Clone [this project's API](https://github.com/turingschool-examples/overlook-api) to your local machine.
6. `cd` into the API directory.
7. Run `npm install` in the API directory.
8. Run `npm start` in the API directory.
9. Once both directories are running, copy the local address populated by the main project's directory into a browser.
10. To stop the application and API from running locally use `control` + `c` while in the respective directory.

```
Signing in as a customer:
username: customer## (where ## is any number between 1 and 50 and is the ID of the user)
password: overlook2021
```
```
Signing in as management:
username: manager
password: overlook2021
```

### Goals:
- Use OOP to drive the design of the application and the code
- Incorporate user centric error handling throughout the site's design
- Build site UX/UI with accesability in mind
- Create a robust test suite that thoroughly tests all functionality of a client-side application
- Use GET and POST requests to get data with an API

Wins: Planning the site's layout and functionality with OOP helped to pave the way later in the project. 

Challenges: Using fetch calls dynamically to send and receive data instead of updating locally.

### Testing:
Testing was done throughout the project using Mocha and Chai, in addition to testing functionality and styling in the browser.

To run the test suite for this project after cloning down, use the command `npm test`. The test results will output to the terminal.

### Future Extensions:
- Build out full management functionality so that an admin is able to create/delete customer bookings.
- Create parallax effect for log in screen creating a sense of depth.
- Build out additonal pages for the customer to learn more about the hotel and accomodations.

### Contributors: 
- [Joe Rupp](https://github.com/JoeRupp) - creator
- [Matt Ruder](https://github.com/mattruder) - review

Original project spec can be found [here](https://frontend.turing.edu/projects/overlook.html)
