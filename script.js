const expenseTable = document.getElementById('table');

table.addEventListener('submit', addItems);

function addItems(e) {
    e.preventDefault();

    var elements = this.elements;
    var purchase = elements.purchase.value;
    var location = elements.location.value;
    var paymentType = elements.paymentType.value;
    var date = elements.date.value;
    var amount = elements.amount.value;

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(elements));

    document.getElementById('item').textContent = `${purchase}`;
    document.getElementById('destination').textContent = `${location}`;
    document.getElementById('funds').textContent = `${paymentType}`;
    document.getElementById('dates').textContent = `${date}`;
    document.getElementById('expenseAmt').textContent = `${amount}`;

    expenseTable.appendChild(td)
}