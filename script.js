// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// ===============================
// CONTACT FORM MESSAGE
// ===============================

const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");


if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        successMessage.classList.remove("hidden");


        contactForm.reset();


        setTimeout(()=>{

            successMessage.classList.add("hidden");

        },4000);


    });

}



// ===============================
// SCROLL ANIMATION
// ===============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

    entry.target.classList.add(
        "show"
    );

}


});


},
{
    threshold:0.2
}
);



sections.forEach(section=>{

    observer.observe(section);

});



// ===============================
// FOOTER YEAR
// ===============================

const year = document.getElementById("year");


if(year){

    year.innerHTML = new Date().getFullYear();

}
emailjs.init({
    publicKey: "huSSniHuMMTrTBf_Q"
});


emailjs.sendForm(
    "service_l5c7o76",
    "template_bf9dxvo",
    this
);