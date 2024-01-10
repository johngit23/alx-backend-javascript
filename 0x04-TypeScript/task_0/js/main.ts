export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Yohannes",
  lastName: "Mebrahtom",
  age: 26,
  location: "Addis Ababa, Ethiopia",
};
const studentB: Student = {
  firstName: "Kemo",
  lastName: "Hkiros",
  age: 26,
  location: "Tokyo, Japan",
};

const studentsList: Array<Student> = [studentA, studentB];

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
export const displayStudents = (studentsList: Array<Student>): void => {
  // create table tag
  const table = document.createElement("table");
  const headRow = document.createElement("tr");
  table.insertAdjacentElement("beforeend", headRow);

  // insert headers
  headRow.insertAdjacentHTML("beforeend", "<th>FirstName</th>");
  headRow.insertAdjacentHTML("beforeend", "<th>Location</th>");

  for (const student of studentsList) {
    const studentRow = document.createElement("tr");
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    table.insertAdjacentElement("beforeend", studentRow);
  }

  document.body.insertAdjacentElement("beforeend", table);
};

displayStudents(studentsList);
document.title = "Task 0";
