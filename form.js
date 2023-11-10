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

        // Validate at least one adventure preference is checked
        const adventurePreferences = document.querySelectorAll('input[name="adventurePreference"]:checked');
        if (adventurePreferences.length === 0) {
            alert("Please select at least one adventure preference.");
            isValid = false;
        }

        // Validate at least one accommodation preference is checked
        const accommodationPreferences = document.querySelectorAll('input[name="accommodationPreference"]:checked');
        if (accommodationPreferences.length === 0) {
            alert("Please select at least one accommodation preference.");
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Dynamic elements
    // Show additional input when 'Other' is selected in Adventure Preferences
    const otherAdventureCheckbox = document.querySelector('input[id="otherAdventure"]');
    otherAdventureCheckbox.addEventListener("change", function() {
        const otherInput = document.querySelector('input[name="otherAdventure"]');
        otherInput.style.display = this.checked ? 'block' : 'none';
    });

    // Show additional input when 'Other' is selected in Accommodation Preferences
    const otherAccommodationCheckbox = document.querySelector('input[id="otherAccommodation"]');
    otherAccommodationCheckbox.addEventListener("change", function() {
        const otherInput = document.querySelector('input[name="otherAccommodation"]');
        otherInput.style.display = this.checked ? 'block' : 'none';
    });

    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

});
