/**
 * NaCCER AI Platform - Form Validation & Handling
 * Government of India - Ministry of Coal (CMPDI)
 */

// Form validation utilities
const FormValidator = {
    // Email validation
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Password validation (minimum 8 characters)
    isValidPassword: function(password) {
        return password.length >= 8;
    },

    // Required field validation
    isRequired: function(value) {
        return value.trim() !== '';
    },

    // Show error message
    showError: function(inputId, message) {
        const input = document.getElementById(inputId);
        const errorElement = document.getElementById(inputId + 'Error');
        
        if (input && errorElement) {
            input.classList.add('form-input-error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },

    // Clear error message
    clearError: function(inputId) {
        const input = document.getElementById(inputId);
        const errorElement = document.getElementById(inputId + 'Error');
        
        if (input && errorElement) {
            input.classList.remove('form-input-error');
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    },

    // Clear all errors in a form
    clearAllErrors: function(formId) {
        const form = document.getElementById(formId);
        if (form) {
            const errorElements = form.querySelectorAll('.form-error');
            errorElements.forEach(error => {
                error.textContent = '';
                error.style.display = 'none';
            });
            
            const errorInputs = form.querySelectorAll('.form-input-error');
            errorInputs.forEach(input => {
                input.classList.remove('form-input-error');
            });
        }
    }
};

// Login form handling
document.addEventListener('DOMContentLoaded', function() {
    
    // Password toggle functionality
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon (optional - can be enhanced with different SVG)
            this.classList.toggle('active');
        });
    }

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            FormValidator.clearAllErrors('loginForm');
            
            // Get form values
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            
            let isValid = true;
            
            // Validate username/email
            if (!FormValidator.isRequired(username)) {
                FormValidator.showError('username', 'Email or username is required');
                isValid = false;
            }
            
            // Validate password
            if (!FormValidator.isRequired(password)) {
                FormValidator.showError('password', 'Password is required');
                isValid = false;
            } else if (!FormValidator.isValidPassword(password)) {
                FormValidator.showError('password', 'Password must be at least 8 characters');
                isValid = false;
            }
            
            // If validation passes, proceed with login
            if (isValid) {
                // Show loading state
                const submitBtn = loginForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<div class="spinner spinner-sm" style="border-color: #fff; border-top-color: transparent; margin: 0 auto;"></div>';
                
                // Simulate API call (replace with actual API call)
                setTimeout(function() {
                    // For demo purposes, redirect to dashboard
                    window.location.href = 'dashboard.html';
                }, 1500);
            }
        });
    }

    // OTP Login button
    const otpLoginBtn = document.getElementById('otpLoginBtn');
    
    if (otpLoginBtn) {
        otpLoginBtn.addEventListener('click', function() {
            // Redirect to OTP login page (to be created)
            alert('OTP login functionality will be implemented. You will receive an OTP on your registered email/phone.');
        });
    }

    // Real-time validation on input blur
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (!FormValidator.isRequired(value)) {
                FormValidator.showError('username', 'Email or username is required');
            } else {
                FormValidator.clearError('username');
            }
        });
    }

    const passwordInputBlur = document.getElementById('password');
    if (passwordInputBlur) {
        passwordInputBlur.addEventListener('blur', function() {
            const value = this.value;
            if (!FormValidator.isRequired(value)) {
                FormValidator.showError('password', 'Password is required');
            } else if (!FormValidator.isValidPassword(value)) {
                FormValidator.showError('password', 'Password must be at least 8 characters');
            } else {
                FormValidator.clearError('password');
            }
        });
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
}
