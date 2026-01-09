function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid input.";
  }

  let first =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  let last =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return last + ", " + first;
}

console.log(formatFullName("toni", ""));