import readlineSync from "readline-sync";
import Guest from "./guest.js";
class TicketingCounter {
  static calculatePriceForSingleGuest(guest) {
    const age = guest.getAge();
    if (age <= 2) {
      return 0;
    }
    if (age > 2 && age < 18) {
      return 100;
    }
    if (age >= 18 && age < 60) {
      return 500;
    }
    if (age >= 60) {
      return 300;
    }
  }

  static calculateTotalPrice(listOfGuests = []) {
    let totalPrice = 0;
    listOfGuests.forEach((guest) => {
      totalPrice += this.calculatePriceForSingleGuest(guest);
    });
    return totalPrice;
  }

  static printTicket(listOfGuests = []) {
    console.log("===============YOUR TICKETS================");
    listOfGuests.forEach((guest) => {
      console.log(`${guest.getName()}(age: ${guest.getAge()})`);
    });
    console.log("===========================================");
  }
}

function start() {
  console.log("=================WELCOME TO ZOO=================");
  while (true) {
    let listOfGuests = [];
    const numberOfGuests = +readlineSync.question("Enter number of guests\n");
    for (let i = 1; i <= numberOfGuests; i++) {
      const guestName = readlineSync.question(`Enter name of guest ${i}\n`);
      const guestAge = +readlineSync.question(`Enter age of guest ${i}\n`);
      listOfGuests.push(new Guest(guestName, guestAge));
    }

    const totalPrice = TicketingCounter.calculateTotalPrice(listOfGuests);
    console.log(`Your total price is: ${totalPrice}`);
    TicketingCounter.printTicket(listOfGuests);
  }
}

start();
