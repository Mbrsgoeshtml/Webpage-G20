
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    contactForm.reset();
});
