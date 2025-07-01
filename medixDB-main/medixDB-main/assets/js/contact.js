document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault();
    const cfSubmit = document.getElementById('contact-submit');
    const defaultText = cfSubmit.innerText;
    cfSubmit.disabled = true;
    cfSubmit.innerText = 'Sending...';
    const fullName = document.getElementById("contactname").value;
    const email = document.getElementById("contactemail").value;
    const message = document.getElementById("contactmessage").value;
    const currentDate = new Date().toLocaleString();
    const recordData = {
        "fields": {
            "Name": fullName,
            "Email": email,
            "Message": message,
            "Timestamp": currentDate
        }
    };
    fetch(`https://api.airtable.com/v0/${mini}/${complain}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${groK}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recordData),
    })
    .then(response => response.json())
    .then(data => {
        cfSubmit.innerText = defaultText; 
        cfSubmit.disabled = false;
        alert("We have received your message and would revert shortly. Thank you!");
    })
    .catch(error => console.error('Error:', error));
});