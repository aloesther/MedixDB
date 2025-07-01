document.getElementById('add-new-patient-btn').addEventListener('click', function() {
    document.getElementById('register-new-patient').classList.toggle('active');
    document.getElementById('popup-overlay').classList.toggle('active');
});

// Close the popup when clicking outside of it
document.getElementById('popup-overlay').addEventListener('click', function() {
    document.getElementById('register-new-patient').classList.remove('active');
    document.getElementById('popup-overlay').classList.remove('active');
});