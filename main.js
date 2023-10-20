function customerCard(customer) {
  return `<div class="firstName">${customer.name.first}<div>`
}

let database = customers.map((customer) => customerCard(customer))

document.querySelector('.container').innerHTML = database;