# [Bus Reservation App](https://bus-reservation-auth.netlify.app)

This app has 2 views.

 - Dashboard
 - Reservation
 
 ## Dashboard
 Has basically 2 section, 
 - Recent Bookings   
 - Deck view
### Recent Bookings
Recent booking contains the booking made recently either from Dashboard route or Reservation route. It might appear redundant as you can view which seat is booked and clicking on it you can see details such as name, email the requirements PDF I recieved in email stated it dashboard should have view of all passengers, couldn't determine deck view would suffice so added the Recent Bookings component.

### Deck View
Deck view from dashboard allows you to click on both reserved and unreserved seats. It also shows date of booking which won't be visible if viewed through Reservation tab. Here you can modify details.

## Reservation
This will be default path if you were to land on app. It has a deck view, where you can see all the seats that are available marked by green color and booked seats marked by red color, you cannot interact with booked seats.

## Additional Features
### Modals
Decided to add a modal component, although it wasn't an requirement, I thought it would give a better interface for booking form

### Alerts
Added Alerts mechanism because it is essential to give the user some feedback that their action has been performed and couldn't find any better no-intrusive way than auto-disappearing alerts.

## Clarifications
### Usage of memoization techniques 
I know the project is very small and memoization techniques aren't required but wanted to build it like production-like app so added them. 


## How to run
Clone the repo

    git clone https://github.com/ajayjarhad/bus-reservation.git

Install the npm packages

    pnpm install
Run dev-server

    pnpm dev
