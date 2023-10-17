const faqQuestionEl = document.querySelectorAll(".faq-question");

faqQuestionEl.forEach(btn => {

    btn.addEventListener("click", (event) => {

        if (event.target.classList.contains("active"))

            event.target.classList.remove("active");

        else {
            
            faqQuestionEl.forEach(btn => btn.classList.remove("active"));

            event.target.classList.add("active");

        }

    });

});
