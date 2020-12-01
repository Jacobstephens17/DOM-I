const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/* NAVBAR */ 

const services = document.createElement("a");
services.textContent = "Services";
document.querySelector("nav").appendChild(services).style.color = "Green";

const product = document.createElement("a");
product.textContent = "Product";
document.querySelector("nav").appendChild(product).style.color = "Green";

const vision = document.createElement("a");
vision.textContent = "Vision";
document.querySelector("nav").appendChild(vision).style.color = "Green";

const features = document.createElement("a");
features.textContent = "Features";
document.querySelector("nav").appendChild(features).style.color = "Green";

const about = document.createElement("a");
about.textContent = "About";
document.querySelector("nav").appendChild(about).style.color = "Green";

const contact = document.createElement("a");
contact.textContent = "Contact";
document.querySelector("nav").appendChild(contact).style.color = "Green";

const links = document.createElement("a");
links.textContent = "Links";
document.querySelector("nav").appendChild(links).style.color = "Green";

const joinUs = document.createElement("a");
joinUs.textContent = "Join Us!";
document.querySelector("nav").appendChild(joinUs).style.color = "Green";


/* HeadContent */
const headP = document.querySelector("h1");
headP.textContent = "Dom is Awesome"

const button = document.querySelector("button");
button.textContent = "Get Started"

const headImg = document.getElementById("cta-img");
headImg.setAttribute("src", "/img/header-img.png");



/* MidSection */

const allContent = document.querySelectorAll(".text-content");

allContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
allContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];

allContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
allContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']


/* MidDividingIMGTOP */

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "/img/mid-page-accent.jpg");

/* MidDividingIMGBOTTOM */

allContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
allContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']

allContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
allContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']

allContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
allContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']



/* ContactInfo */
const contactContent = document.querySelectorAll(".contact");
contactContent[0].querySelector('h4').textContent = siteContent["contact"]["contact-h4"];
contactContent[0].querySelectorAll('p').innerText = siteContent["contact"]["address"] <br> ["contact"]["phone"] <br> ["contact"]["email"]; 

/* CopyWrightInfo */


const copyright = document.getElementsByTagName("footer");
copyright[0].querySelector("p").textContent = "Copyright Great Idea! 2018"







