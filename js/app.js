const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            animationElements.classList.add('animate_pause');
        } else {
            entry.target.classList.remove('show');
            animationElements.classList.remove('animate_pause');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const animationElements = document.querySelector('.animation');
hiddenElements.forEach((el) => observer.observe(el));
