const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const about = document.querySelector('.about__container');
const contact = document.querySelector('.contact__container');

const className = 'in-view';

first.classList.remove(className);
second.classList.remove(className);
third.classList.remove(className);
about.classList.remove(className);
contact.classList.remove(className);


const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(className) 
            return;
        }
        entry.target.classList.remove(className);
    });
},
{
    threshold: .25
});




observer.observe(first);
observer.observe(second);
observer.observe(third);
observer.observe(about);
observer.observe(contact);
