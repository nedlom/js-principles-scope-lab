// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "initial value"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "changes";
}