export default function Contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    const contactInfo = document.createElement('div');
    contactInfo.textContent = "555 Food Road";
    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = "555 8383-383838383";

    const email = document.createElement('div');
    email.textContent = "email@muchrestaurant.com";
    content.appendChild(heading);
    content.appendChild(phoneNumber);
    content.appendChild(email)
    content.appendChild(contactInfo);
}