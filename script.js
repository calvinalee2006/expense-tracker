const expenseTable = document.getElementById('table');
const list = document.getElementById('expense_list')
const removeBtn = document.getElementById('btn-remove')

table.addEventListener('submit', addItems);
removeBtn.addEventListener('click', removeItem)

function addItems(e) {
    e.preventDefault();

    var elements = this.elements;
    var purchase = elements.purchase.value;
    var location = elements.location.value;
    var paymentType = elements.paymentType.value;
    var date = elements.date.value;
    var amount = elements.amount.value;

    var tr = document.createElement('tr')

    const purchaseTd = document.createElement('td');
    purchaseTd.textContent = purchase;
    tr.appendChild(purchaseTd);

    const locationTd = document.createElement('td');
    locationTd.textContent = location;
    tr.appendChild(locationTd);

    const paymentTd = document.createElement('td');
    paymentTd.textContent = paymentType;
    tr.appendChild(paymentTd);

    const dateTd = document.createElement('td');
    dateTd.textContent = date;
    tr.appendChild(dateTd);

    const amountTd = document.createElement('td');
    amountTd.textContent = amount;
    tr.appendChild(amountTd);

    var removeTd = document.createElement('button');
    removeTd.className = 'btn-remove';
    removeTd.appendChild(document.createTextNode('X'));
    tr.appendChild(removeTd)


    list.appendChild(tr);
}

function removeItem(e) {
    var removeData = document.getElementsByClassName('btn-remove');
    removeData.remove()
}
