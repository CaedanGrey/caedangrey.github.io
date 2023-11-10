document.addEventListener("DOMContentLoaded", function() {

    // Form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        let isValid = true;

        // Example: Validate Full Name is not empty
        const fullName = document.querySelector('input[name="fullname"]');
        if (!fullName.value.trim()) {
            alert("Please enter your full name.");
            isValid = false;
        }

        // Example: Validate Email Address
        const email = document.querySelector('input[name="email"]');
        if (!email.value.trim() || !validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Add other validation checks as needed...

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Dynamic elements
    // Example: Show additional input when 'Other' is selected in Adventure Preferences
    document.querySelectorAll('input[name="activities"]').forEach(function(input) {
        input.addEventListener("change", function() {
            const otherInput = document.querySelector('input[name="other_activities"]');
            if (input.value === "other" && input.checked) {
                otherInput.style.display = 'block';
            } else {
                otherInput.style.display = 'none';
            }
        });
    });

    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

});
