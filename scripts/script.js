document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tourForm');
    const submitButton = form.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      if (form.checkValidity()) {
        // Disable the submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Loading...';
  
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const budget = document.getElementById('budget').value;
        const activity = document.getElementById('activity').value;
        const destination = document.getElementById('destination').value;
  
        const formData = {
          firstName,
          lastName,
          email,
          budget,
          activity,
          destination
        };
  
        try {
          const response = await fetch('https://stivin-test-server.onrender.com/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
  
          if (!response.ok) {
            throw new Error('Failed to submit form data');
          }
  
          // Handle success, maybe show a success message
          alert('Form data submitted successfully')
          console.log('Form data submitted successfully');
  
          // Reset the form and enable submit button
          form.reset();
          submitButton.innerHTML = 'Next Step &rarr;';
          submitButton.disabled = false;
        } catch (error) {
          // Handle error, maybe show an error message
          alert(error?.message)
          console.error('Error submitting form data:', error);
          
          // Re-enable the submit button
          submitButton.innerHTML = 'Next Step &rarr;';
          submitButton.disabled = false;
        }
      } else {
        // Form is not valid, handle invalid form
        console.log('Form is not valid');
      }
    });
  });
  