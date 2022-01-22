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
