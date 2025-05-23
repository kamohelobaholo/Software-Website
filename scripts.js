document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded.");

    //Scroll Reveal animation
    const sections = document.querySelectionAll("Section");

    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting) {
                entry.target.style.Opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });

    }, {
        threshold: 0.2
    });

    sections.forEach(section => observer.observe(Section));

    //Contact alert
    const contactdetails = document.querySelector("details:nth-of-type(3)");
    contactdetails.addEventListener("toggle", () =>{
         
        if (contactdetails.open) {
            alert("Get in touch via email or phone!")
        }

    });

    //Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetID);
            if (target) {
                target.scrollIntoView({ behavior: "smooth"});
            }
        });
    });
    document.addEventListener("DOmContentLoaded", function(){
        const togglebutton = document.getElementById("darkmodeToggle");

        togglebutton.addEventListener("click", function(){
            document.body.classList.toggle("dark-mode");
            document.querySelector("nav").classList.toggle("dark-mode");
        });
    });

});

