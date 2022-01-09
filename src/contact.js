export default function Contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const contactInfo = document.createElement('div');
    contactInfo.textContent = "555 Food Road";
    content.appendChild(contactInfo);
}