export default function NavBar() {
    const body = document.querySelector('body');
    
    const navbar = document.createElement('nav');
    
    const homeTab = document.createElement('li');
    homeTab.className = "home tab";
    homeTab.textContent = "Home";
    const menuTab = document.createElement('li');
    menuTab.className = "menu tab";
    menuTab.textContent = "Menu";
    const contactTab = document.createElement('li');
    contactTab.className = "contact tab";
    contactTab.textContent = "Contact";

    navbar.appendChild(homeTab);
    navbar.appendChild(menuTab);
    navbar.appendChild(contactTab);
    body.prepend(navbar);

}