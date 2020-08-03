/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string

  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.

  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const { testDriver } = require("../../helpers");

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes areount the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

const testCases = [
  { arguments: [table, insertData1], expected: expected1 },
  { arguments: [table, insertData2], expected: expected2 },
];
testDriver([insert, insertFunctional], testCases);

function insert(tableName, columnValuePairs) {
  let columns = "";
  let values = "";

  for (const colName in columnValuePairs) {
    if (columnValuePairs.hasOwnProperty(colName)) {
      let val = columnValuePairs[colName];

      if (typeof val === "string") {
        val = `'${val}'`;
      }

      // prepend a comma and space if it's not the first column added to string
      if (columns === "") {
        columns += colName;
      } else {
        columns += `, ${colName}`;
      }

      if (values === "") {
        values += val;
      } else {
        values += `, ${val}`;
      }
    }
  }
  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

function insertFunctional(tableName, columnValuePairs) {
  const columns = Object.keys(columnValuePairs).join(", ");

  const values = Object.values(columnValuePairs)
    .map((val) => (typeof val === "string" ? `'${val}'` : val))
    .join(", ");

  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

/* ******************************************************************************** */
