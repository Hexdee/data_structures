const readline = require("readline");

class Staff {
  static staffs = [];

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = parseInt(age);
    Staff.staffs.push(this);
  }

  static getStaffs(sortedBy = 1) {
    if (sortedBy == 1) {
      return Staff.staffs.sort((staffA, staffB) => staffA.firstName.localeCompare(staffB.firstName))
    } else if (sortedBy == 2) {
      return Staff.staffs.sort((staffA, staffB) => staffA.lastName.localeCompare(staffB.lastName))
    } else if (sortedBy == 3) {
      return Staff.staffs.sort((staffA, staffB) => staffA.age - staffB.age)
    }
  }


}

const csvContent = `First Name,Last Name,Age
Onome,Ehigiator,45
Adegoke,Akeem-omosanya,67
Bukola,Ehigiator,66
Olufunmi,Aremu,34
Ifeanyichukwu,Ekwueme,54
Isioma,Mustapha,57
Ayebatari,Joshua,25
Nnamdi,Olawale,76
Lola,Abosede,45
Emeka,Oyelude,34
Aminu,Ogunbanwo,67
Simisola,Ekwueme,98
Ayebatari,Busari,56
Chinyere,Uchechi,52
Adeboye,Jamiu,84
Titilayo,Kimberly,56
Chimamanda,Ehigiator,34
Bukola,Adegoke,57
Cherechi,Elebiyo,59
Titilayo,Afolabi,90`;

// Split the CSV content into an array of lines
const lines = csvContent.trim().split("\n");

// Extract the staff records from the CSV content
for (let i = 1; i < lines.length; i++) {
  const fields = lines[i].split(",");
  new Staff(fields[0], fields[1], fields[2]);
}

// Ask the user how to sort the staff records
const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInterface.question("Enter 1 to sort by First Name\nEnter 2 to sort by Last Name\nEnter 3 to sort by Age\n", answer => {
  if (answer == "exit") {
    readInterface.close();
  }

  const sortedStaff = Staff.getStaffs(answer);

  // Display the sorted staff records
  console.log("Sorted Staff Records:");
  console.log("====================");
  for (let i = 0; i < sortedStaff.length; i++) {
    console.log(`${i + 1}. ${sortedStaff[i].firstName} ${sortedStaff[i].lastName} ${sortedStaff[i].age}`);
  }

  readInterface.close();
});
