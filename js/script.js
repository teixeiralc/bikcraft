// Activate menu links

const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Activate products links

const params = new URLSearchParams(location.search);

function activateProduct(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

params.forEach(activateProduct);

// Faq

const faq = document.querySelectorAll(".faq button");

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function faqEvents(question) {
  question.addEventListener("click", activateQuestion);
}

faq.forEach(faqEvents);

// bicycles gallery

const gallery = document.querySelectorAll(".bike-img img");
const container = document.querySelector(".bike-img");

function changeImage(event) {
  const img = event.currentTarget;
  matchMedia("(min-width: 1000px)").matches;
  if (matchMedia("(min-width: 1000px)").matches) {
    container.prepend(img);
  }
}

function galleryEvent(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvent);

// Animation

if (window.SimpleAnime) {
  new SimpleAnime();
}