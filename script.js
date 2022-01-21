intializeExpenseTracker();

function intializeExpenseTracker() {
  document.getElementById('inputForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createNewExpense();
    resetInputForm();
  });
}

function createNewExpense() {
  const tableRow = createTableRow();
  const tableData = createTableData();
  const deleteButton = createDeleteButton();
  tableRow.append(...tableData, deleteButton);
  appendNewExpenseToTable(tableRow);
}

function resetInputForm() {
  document.getElementById('inputForm').reset();
}
function createTableRow() {
  return document.createElement('tr');
}
function createTableData() {
  const inputFormData = document.getElementById('inputForm');
  const expenseData = [
    inputFormData.purchase.value,
    inputFormData.location.value,
    inputFormData.paymentType.value,
    inputFormData.date.value,
    inputFormData.amount.value,
  ];
  const newRowElements = [];
  for (i = 0; i < expenseData.length; i++) {
    const newElement = document.createElement('td');
    newElement.textContent = expenseData[i];
    newRowElements.push(newElement);
  }
  return [...newRowElements];
}
function createDeleteButton() {
  const deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('X'));
  deleteButton.onclick = () => {
    deleteButton.closest('tr').remove();
  };
  return deleteButton;
}
function appendNewExpenseToTable(tableRow) {
  document.getElementById('expense_list').appendChild(tableRow);
}
// definitely read this one!!!
// const let var -- js declarations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations

// this is cool to understand & very useful when you get react & passing props
// arrays & object -- js destructuring assignment
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// chew on this
//dont be afraid to write small functions.
// maintain different levels of abstractions by using multiple functions, even if this creates more code.
// because at the end of the day, well abstracted code is easier to read, understand, update & maintain.
