/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns 
*/
export default function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
}
