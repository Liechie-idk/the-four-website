const feedbackForm = document.querySelector(feedbackForm);
console.log("hello is this working");

function createForm(event) {
    event.preventDefault();
    console.log("Form created");

}

feedbackForm.addEventListener('submit', createForm);