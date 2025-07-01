var logoutButton = document.getElementsByClassName("logout-button")[0];

logoutButton.addEventListener("click", function() {
    var password = localStorage.getItem('password');
    var email = localStorage.getItem('email')
    axios.get(`https://api.airtable.com/v0/${mini}/${tennis}`, {
        params: {
            filterByFormula: `AND({Email} = "${email}", {Password} = "${password}")`
        },
        headers: {
            'Authorization': `Bearer ${groK}`,
        }
    })
    .then((resp) => {
        if (resp.data.records.length > 0) {
            var recordId = resp.data.records[0].id;
            var updateData = {
                fields: {
                    "Log": "1",
                }
            };
            axios.patch(`https://api.airtable.com/v0/${mini}/${tennis}/${recordId}`, updateData, {
                headers: {
                    'Authorization': `Bearer ${groK}`,
                }
            })
            .then(() => {
                localStorage.removeItem('firstname');
                localStorage.removeItem('lastname');
                localStorage.removeItem('usertype');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                localStorage.setItem('logValue', 1);
                window.location.href = "../";
            })
            .catch(function(error) {
                console.error(error);
                alert('An error occurred, please try again later.');
            });
        } else {
            alert("User not found. Please log in again.");
            localStorage.setItem('logValue', 1);
            window.location.href = "../";
        }
    })
    .catch(function(error) {
        console.error(error);
        alert('An error occurred, please try again later.');
    });
});


