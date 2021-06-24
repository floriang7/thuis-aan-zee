var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if(status.classList.contains("text-danger")) {
            status.classList.remove("text-danger");
        }
        status.classList.add("text-secondary");
        status.classList.add("fade-out");
        status.innerHTML = "Bedankt voor uw inzending.";
        form.reset()
    }).catch(error => {
        if(status.classList.contains("text-secondary")) {
            status.classList.remove("text-secondary");
        }
        status.classList.add("text-danger");
        status.classList.add("fade-out");
        status.innerHTML = "Er trad een probleem op bij het verzenden."
    });
}
form.addEventListener("submit", handleSubmit)


