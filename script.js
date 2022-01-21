intializeExpenseTracker();

function intializeExpenseTracker() {
  document.getElementById('inputForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createNewExpense();
    document.getElementById('inputForm').reset();
  });
  document
    .getElementById('expense_list')
    .addEventListener('click', removeItems);
}

function createNewExpense() {
  const tableRow = createTableRow();
  const tableData = createTableData();
  const deleteButton = createDeleteButton();
  tableRow.append(...tableData, deleteButton);
  appendNewExpenseToTable(tableRow);
}
function removeItems(e) {
  const tableRow = e.target.parentElement;
  expense_list.removeChild(tableRow);
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
  deleteButton.className = 'btnRemove';
  deleteButton.appendChild(document.createTextNode('X'));
  return deleteButton;
}
function appendNewExpenseToTable(tableRow) {
  document.getElementById('expense_list').appendChild(tableRow);
}

// const let var -- js declarations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations

// arrays & object -- js destructuring assignment
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
