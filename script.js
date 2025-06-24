document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".main h2 span");
    introText.classList.add("animate-text");
});
document.getElementById('professional-email').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Track the click (you can use Google Analytics or similar)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'email_click', {
            'event_category': 'engagement',
            'event_label': 'professional_contact'
        });
    }
    
    // Compose email with professional subject/body
    const subject = "Project Collaboration Inquiry";
    const body = `Dear Mohamed,\n\nI came across your impressive portfolio and would like to discuss a potential collaboration. \n\nCould you please share your availability for a brief discussion?\n\nBest regards,\n[Your Name]`;
    
    // Try Gmail first, then fallback to mailto:
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=mohamedamr9722@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    
    // Fallback for non-Gmail users
    setTimeout(() => {
        window.location.href = `mailto:mohamedamr9722@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 500);
});
