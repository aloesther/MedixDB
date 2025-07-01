document.getElementById("signin").addEventListener("submit", function(event) {
    event.preventDefault();
    const authSubmit = document.getElementById('eac-submit');
    const defaultText = authSubmit.innerText;
    authSubmit.disabled = true;
    authSubmit.innerText = 'Logging In...';
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpassword").value;
    fetch(`https://api.airtable.com/v0/${mini}/${tennis}?filterByFormula=AND({Email}="${email}", {Password}="${password}")`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${groK}`,
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.records.length === 0) {
            authSubmit.innerText = defaultText;
            authSubmit.disabled = false;
            alert("Invalid email or password")
        } else {
            const record = data.records[0];
            const firstname = record.fields["First Name"];
            const lastname = record.fields["Last Name"];
            const usertype = record.fields["User Type"];
            fetch(`https://api.airtable.com/v0/${mini}/${tennis}/${record.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${groK}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: {
                        log: "0"
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("firstname", firstname);
                localStorage.setItem("lastname", lastname);
                localStorage.setItem("usertype", usertype);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                localStorage.setItem("logValue", "0");
                window.location.href = "../dashboard/index.html";
            })
            .catch(error => console.error('Error updating log:', error));
        }
    })
    .catch(error => console.error('Error:', error));
});