document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const regSubmit = document.getElementById('reg-submit');
    const defaultText = regSubmit.innerText;
    regSubmit.disabled = true;
    regSubmit.innerText = 'Signing Up...';
    const firstname = document.getElementById("userfirstname").value;
    const lastname = document.getElementById("userlastname").value;
    const usertype = document.getElementById("usertype").value;
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpassword").value;
    fetch(`https://api.airtable.com/v0/${mini}/${tennis}?filterByFormula=({Email}="${email}")`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${groK}`,
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.records.length > 0) {
            regSubmit.innerText = defaultText;
            regSubmit.disabled = false;
            alert("This email address already exists in our records.");
        } else {
            const recordData = {
                "fields": {
                    "First Name": firstname,
                    "Last Name": lastname,
                    "User Type": usertype,
                    "Email": email,
                    "Password": password,
                    "Log": "0"
                }
            };
            fetch(`https://api.airtable.com/v0/${mini}/${tennis}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${groK}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recordData),
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("firstname", firstname);
                localStorage.setItem("lastname", lastname);
                localStorage.setItem("usertype", usertype);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                localStorage.setItem("logValue", "0");
                regSubmit.innerText = defaultText;
                regSubmit.disabled = false;
                window.location.href = "../dashboard/index.html";
            })
            .catch(error => console.error('Error:', error));
        }
    })
    .catch(error => console.error('Error:', error));
});