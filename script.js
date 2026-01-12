// Task 1: Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }
  let first =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  let last = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return last + ", " + first;
}

console.log(formatFullName("toni", "thomas"));

// Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    isNaN(price) ||
    typeof quantity !== "number" ||
    isNaN(quantity) ||
    typeof taxRate !== "number" ||
    isNaN(taxRate)
  ) {
    return "Invalid input";
  }
  return price * quantity * (1 + taxRate);
}

console.log(calculateTotalCost(20, 2, 0.03));

// Task 3: Functions with Conditional Logic
function checkEligibility(age, isEmployed) {
  if (age < 18 || !isEmployed) {
    console.log("You are not eligible.");
  } else {
    console.log("You're eligible!");
  }
}

checkEligibility(17, true);

// Task 4: Refactoring for Reusability
