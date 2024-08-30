document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const foodElements = document.querySelectorAll('input[name="food"]:checked');
    const foodChoices = Array.from(foodElements).map(element => element.value);

    if (foodChoices.length < 2) {
        alert('Please choose at least two food options.');
        return;
    }

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cells = [firstName, lastName, email, address, pincode, gender, foodChoices.join(', '), state, country];
    cells.forEach(cellData => {
        const newCell = newRow.insertCell();
        newCell.textContent = cellData;
    });

    document.getElementById('form').reset();
});
