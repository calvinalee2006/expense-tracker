const expenseTable = document.getElementById('table');
const list = document.getElementById('expense_list')

table.addEventListener('submit', addItems);

function addItems(e) {
    e.preventDefault();

    var elements = this.elements;
    var purchase = elements.purchase.value;
    var location = elements.location.value;
    var paymentType = elements.paymentType.value;
    var date = elements.date.value;
    var amount = elements.amount.value;

    var tr = document.createElement('tr');
    tr.appendChild(document.createTextNode(purchase, location, paymentType, date, amount));

    document.getElementById('item').textContent = `${purchase}`;
    document.getElementById('destination').textContent = `${location}`;
    document.getElementById('funds').textContent = `${paymentType}`;
    document.getElementById('dates').textContent = `${date}`;
    document.getElementById('expenseAmt').textContent = `${amount}`;

    expenseTable.appendChild(tr)
}