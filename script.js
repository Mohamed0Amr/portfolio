document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".main h2 span");
    introText.classList.add("animate-text");
});
// Update your script.js with this improved version
document.addEventListener("DOMContentLoaded", function() {
    const emailLinks = document.querySelectorAll('.email-link');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e.preventDefault();
                window.location.href = `mailto:mohamedamr9722@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Mohamed,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity%20with%20you.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0ABest%20regards,`;
            }
        });
        
        link.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            navigator.clipboard.writeText('mohamedamr9722@gmail.com');
            // Consider using a subtle notification instead of alert
            const notification = document.createElement('div');
            notification.textContent = 'Email copied to clipboard!';
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.padding = '10px 20px';
            notification.style.background = '#3a6cf4';
            notification.style.color = 'white';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '1000';
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
