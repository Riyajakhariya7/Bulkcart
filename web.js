 // JavaScript for handling form submission and displaying popup message
        const form = document.getElementById('contactForm');
        const popup = document.getElementById('popup');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            // Display the popup message with name
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.textContent = `Thank you, ${firstName} ${lastName}, for contacting us!`;


            // Display the popup message
            popup.style.display = 'block';

            // Redirect to home.html after 3 seconds (3000 milliseconds)
            setTimeout(function() {
                window.location.href = 'home.html';
            }, 2000);
        });