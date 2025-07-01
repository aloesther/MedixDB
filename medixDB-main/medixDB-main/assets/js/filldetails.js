// FILL THE DETAILS IN THE VOTING PAGE

// Retrieve the variables from localStorage
const firstname = localStorage.getItem('firstname');
const lastname = localStorage.getItem('lastname');
const usertype = localStorage.getItem('usertype');
const email = localStorage.getItem('email');
const fulllname = firstname + " " + lastname


// Set the values of the HTML elements
document.getElementById('fulllname').textContent = fulllname;
document.getElementById('usertypecontent').textContent = usertype;
document.getElementById('firstname').textContent = firstname;
// document.getElementById('useremail').textContent = email;
