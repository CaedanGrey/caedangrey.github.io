function verifyEmail() {
    let email1 = document.getElementById("email").value;
    let email2 = document.getElementById("emailConfirmation").value;

    if (email1 !== email2) {
        document.getElementById("emailMismatch").style.display = "block";
    } else {
        document.getElementById("emailMismatch").style.display = "none";
    }
}