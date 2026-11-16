// Reliably trigger the visitor's default email app via dynamic anchor click
function openEmailClient(recipient, subject, body) {
  const mailtoLink = document.createElement('a');
  mailtoLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  mailtoLink.style.display = 'none';
  document.body.appendChild(mailtoLink);
  mailtoLink.click();
  document.body.removeChild(mailtoLink);
}

// Contact Form Handler -> sends to hello@examplewebsite142.com
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending.");
    return false;
  }

  const recipient = "hello@examplewebsite142.com";
  const subject = `Website Inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  openEmailClient(recipient, subject, body);
  return false;
}

// Solo Product Order Form -> sends to orders@examplewebsite142.com
function handleProductOrder(productName, unitPrice) {
  const selectedSizeObj = document.querySelector('input[name="shirtSize"]:checked');
  const size = selectedSizeObj ? selectedSizeObj.value : "M";

  const qtyInput = document.getElementById('shirtQty');
  const quantity = qtyInput ? parseInt(qtyInput.value, 10) : 1;
  const totalPrice = unitPrice * quantity;

  const recipient = "orders@examplewebsite142.com";
  const subject = `Order Request: ${productName}`;
  const body =
    `Hello Dash Apparel Team,\n\n` +
    `I would like to place an order:\n\n` +
    `- Product: ${productName}\n` +
    `- Size: ${size}\n` +
    `- Quantity: ${quantity}\n` +
    `- Total Price: ₱${totalPrice}.00\n\n` +
    `Please reply with payment options and stock confirmation.\n\nThank you!`;

  openEmailClient(recipient, subject, body);
}