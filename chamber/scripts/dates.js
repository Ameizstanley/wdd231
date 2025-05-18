document.addEventListener('DOMContentLoaded', function() {
            // Get the current year for copyright
            const currentYear = new Date().getFullYear();
            
            // Get the document's last modified date
            const lastModified = document.lastModified;
            
            // Format the last modified date for better readability
            const formattedDate = new Date(lastModified).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const footerContent = document.getElementById('copyright-year')
            footerContent.textContent = `© ${currentYear} Ameiz chambers of Commerce. All rights reserved. last updated ${formattedDate}`;

            const lastModifiedElement = document.getElementById('lastModified');

                lastModifiedElement.textContent = `last modified: ${lastModified}`;
    });