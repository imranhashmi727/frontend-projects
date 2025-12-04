// Improved JavaScript with better UX
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Button loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call (2 seconds delay)
        setTimeout(function() {
            if(name && email && message) {
                // Success message with icon
                showNotification('✅ Message successfully sent!', 'success');
                
                // Clear form
                contactForm.reset();
            } else {
                // Error message
                showNotification('⚠️ Please fill all fields correctly', 'error');
            }
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
    
    // Notification function
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});