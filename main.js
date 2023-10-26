const container = document.querySelector('.customer-container');

customers.map((customer) => customerCard(customer));

function customerCard(customer) {

  let customerCard = document.createElement('div');
  let customerHeadshot = document.createElement('img');
  let customerName = document.createElement('h2');
  let customerInfo = document.createElement('ul');
  let address1 = document.createElement('li');
  let address2 = document.createElement('li');
  let dob = document.createElement('li');
  let regDate = document.createElement('li');

  let customerNameText = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)

  customerName.classList.add('customer-name');

  customerHeadshot.src = customer.picture.large;
  customerHeadshot.alt = customerNameText;
  customerName.innerText = customerNameText;
  address1.innerText = customer.location.street.number + " " + customer.location.street.name;
  address2.innerText = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode;

  customerInfo.appendChild(address1);
  customerInfo.appendChild(address2);
  customerInfo.appendChild(dob);
  customerInfo.appendChild(regDate);

  customerCard.appendChild(customerHeadshot);
  customerCard.appendChild(customerName);
  customerCard.appendChild(customerInfo);

  container.appendChild(customerCard);
};
