document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("mainNav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-nav");
    }
  });
});

document.getElementById("downloadBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const fileUrl = "./images/cv.pdf";
  const fileName = "Abeer_CV.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

(function () {
  emailjs.init("29ZO95yUK5HUxNxUZ");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const btn = form.querySelector("button");
  const oldText = btn.innerText;
  btn.innerText = "Sending...";

  emailjs.sendForm("service_him4mmo", "template_g8urt2q", this).then(
    function () {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for reaching out. We’ll get back to you shortly.",
        showConfirmButton: false,
        timer: 2000,
      });

      btn.innerText = oldText;
      form.reset();
    },
    function (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong while sending your message. Please try again.",
        confirmButtonColor: "#d33",
      });

      console.log("FAILED...", error);
      btn.innerText = oldText;
    },
  );
});

AOS.init({
  once: true,
});
