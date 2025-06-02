document.addEventListener('DOMContentLoaded', function() {
            
            // Get URL parameters directly
            const urlParams = new URLSearchParams(window.location.search);
            
            // Extract each required field
            const firstName = urlParams.get('firstName') || 'Not provided';
            const lastName = urlParams.get('lastName') || 'Not provided';
            const email = urlParams.get('email') || 'Not provided';
            const mobile = urlParams.get('mobile') || 'Not provided';
            const businessName = urlParams.get('businessName') || 'Not provided';
            const timestamp = urlParams.get('timestamp') || new Date().toISOString();
            
            // Console.log all the data to verify it's working
            console.log('=== FORM SUBMISSION DATA ===');
            console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Email:', email);
            console.log('Mobile:', mobile);
            console.log('Business Name:', businessName);
            console.log('Raw Timestamp:', timestamp);
            console.log('Formatted Timestamp:', new Date(timestamp).toLocaleString());

});

const submittedInfo = document.querySelector('.submittedInfo')

submittedInfo.innerHTML = ``
submittedInfo.innerHTML = `<p>first Name:${firstName} last name:${lastName} and time ${timestamp}<p>`;