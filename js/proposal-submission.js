/**
 * NaCCER AI Platform - Proposal Submission JavaScript
 * Government of India - Ministry of Coal (CMPDI)
 * 
 * Handles multi-step form navigation, validation, file uploads, and submission
 */

let currentStep = 1;
const totalSteps = 4;
let formData = {};
let uploadedFiles = {
    proposalDoc: null,
    budgetDoc: null,
    supportingDocs: [],
    references: null
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initializeFileUploads();
    loadDraftIfExists();
});

/**
 * Navigate to next step
 */
function nextStep(step) {
    // Validate current step before proceeding
    if (!validateStep(step)) {
        return;
    }

    // Save current step data
    saveStepData(step);

    // Move to next step
    if (step < totalSteps) {
        showStep(step + 1);

        // If moving to step 4, populate review summary
        if (step + 1 === 4) {
            populateReviewSummary();
        }
    }
}

/**
 * Navigate to previous step
 */
function previousStep(step) {
    if (step > 1) {
        showStep(step - 1);
    }
}

/**
 * Show specific step
 */
function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });

    // Show target step
    document.getElementById('step' + stepNumber).classList.add('active');

    // Update progress indicator
    updateProgressIndicator(stepNumber);

    // Update current step
    currentStep = stepNumber;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Update progress indicator
 */
function updateProgressIndicator(stepNumber) {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        const stepNum = index + 1;

        if (stepNum < stepNumber) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNum === stepNumber) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

/**
 * Validate current step
 */
function validateStep(step) {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(`#step${step} .form-error`).forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });

    document.querySelectorAll(`#step${step} .form-input-error`).forEach(input => {
        input.classList.remove('form-input-error');
    });

    if (step === 1) {
        // Validate Step 1: Basic Information
        const title = document.getElementById('proposalTitle').value.trim();
        const category = document.getElementById('category').value;
        const keywords = document.getElementById('keywords').value.trim();
        const abstract = document.getElementById('abstract').value.trim();
        const budget = document.getElementById('budget').value;
        const duration = document.getElementById('duration').value;
        const piName = document.getElementById('piName').value.trim();
        const piEmail = document.getElementById('piEmail').value.trim();
        const piPhone = document.getElementById('piPhone').value.trim();
        const piOrg = document.getElementById('piOrganization').value.trim();

        if (!title) {
            showError('proposalTitle', 'Proposal title is required');
            isValid = false;
        } else if (title.length < 10) {
            showError('proposalTitle', 'Title must be at least 10 characters');
            isValid = false;
        }

        if (!category) {
            showError('category', 'Please select a category');
            isValid = false;
        }

        if (!keywords) {
            showError('keywords', 'Keywords are required');
            isValid = false;
        } else {
            const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
            if (keywordArray.length < 3) {
                showError('keywords', 'Please provide at least 3 keywords');
                isValid = false;
            }
        }

        if (!abstract) {
            showError('abstract', 'Abstract is required');
            isValid = false;
        } else if (abstract.length < 100) {
            showError('abstract', 'Abstract must be at least 100 characters');
            isValid = false;
        }

        if (!budget || budget <= 0) {
            showError('budget', 'Please enter a valid budget');
            isValid = false;
        }

        if (!duration || duration <= 0 || duration > 60) {
            showError('duration', 'Duration must be between 1 and 60 months');
            isValid = false;
        }

        if (!piName) {
            showError('piName', 'Principal Investigator name is required');
            isValid = false;
        }

        if (!piEmail) {
            showError('piEmail', 'PI email is required');
            isValid = false;
        } else if (!isValidEmail(piEmail)) {
            showError('piEmail', 'Please enter a valid email address');
            isValid = false;
        }

        if (!piPhone) {
            showError('piPhone', 'PI phone is required');
            isValid = false;
        }

        if (!piOrg) {
            showError('piOrganization', 'PI organization is required');
            isValid = false;
        }
    }

    if (step === 2) {
        // Validate Step 2: Detailed Description
        const problem = document.getElementById('problemStatement').value.trim();
        const objectives = document.getElementById('objectives').value.trim();
        const methodology = document.getElementById('methodology').value.trim();
        const outcomes = document.getElementById('expectedOutcomes').value.trim();

        if (!problem) {
            showError('problemStatement', 'Problem statement is required');
            isValid = false;
        } else if (problem.length < 50) {
            showError('problemStatement', 'Please provide a more detailed problem statement (minimum 50 characters)');
            isValid = false;
        }

        if (!objectives) {
            showError('objectives', 'Research objectives are required');
            isValid = false;
        } else if (objectives.length < 50) {
            showError('objectives', 'Please provide more detailed objectives (minimum 50 characters)');
            isValid = false;
        }

        if (!methodology) {
            showError('methodology', 'Methodology is required');
            isValid = false;
        } else if (methodology.length < 100) {
            showError('methodology', 'Please provide a more detailed methodology (minimum 100 characters)');
            isValid = false;
        }

        if (!outcomes) {
            showError('expectedOutcomes', 'Expected outcomes are required');
            isValid = false;
        } else if (outcomes.length < 50) {
            showError('expectedOutcomes', 'Please provide more detailed expected outcomes (minimum 50 characters)');
            isValid = false;
        }
    }

    if (step === 3) {
        // Validate Step 3: Document Upload
        if (!uploadedFiles.proposalDoc) {
            showError('proposalDoc', 'Proposal document is required');
            isValid = false;
        }

        if (!uploadedFiles.budgetDoc) {
            showError('budgetDoc', 'Budget breakdown document is required');
            isValid = false;
        }
    }

    if (step === 4) {
        // Validate Step 4: Review & Submit
        const termsAccept = document.getElementById('termsAccept').checked;
        const termsAgree = document.getElementById('termsAgree').checked;

        if (!termsAccept) {
            showError('termsAccept', 'Please confirm that all information is accurate');
            isValid = false;
        }

        if (!termsAgree) {
            showError('termsAgree', 'Please agree to the terms and conditions');
            isValid = false;
        }
    }

    return isValid;
}

/**
 * Show error message
 */
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');

    if (field && errorElement) {
        field.classList.add('form-input-error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Save current step data to formData object
 */
function saveStepData(step) {
    if (step === 1) {
        formData.proposalTitle = document.getElementById('proposalTitle').value.trim();
        formData.category = document.getElementById('category').value;
        formData.keywords = document.getElementById('keywords').value.trim();
        formData.abstract = document.getElementById('abstract').value.trim();
        formData.budget = document.getElementById('budget').value;
        formData.duration = document.getElementById('duration').value;
        formData.piName = document.getElementById('piName').value.trim();
        formData.piEmail = document.getElementById('piEmail').value.trim();
        formData.piPhone = document.getElementById('piPhone').value.trim();
        formData.piOrganization = document.getElementById('piOrganization').value.trim();
    }

    if (step === 2) {
        formData.problemStatement = document.getElementById('problemStatement').value.trim();
        formData.objectives = document.getElementById('objectives').value.trim();
        formData.methodology = document.getElementById('methodology').value.trim();
        formData.expectedOutcomes = document.getElementById('expectedOutcomes').value.trim();
        formData.innovation = document.getElementById('innovation').value.trim();
    }
}

/**
 * Initialize file upload areas
 */
function initializeFileUploads() {
    setupFileUpload('proposalDocUpload', 'proposalDoc', false);
    setupFileUpload('budgetDocUpload', 'budgetDoc', false);
    setupFileUpload('supportingDocsUpload', 'supportingDocs', true);
    setupFileUpload('referencesUpload', 'references', false);
}

/**
 * Setup file upload for a specific area
 */
function setupFileUpload(areaId, inputId, multiple) {
    const area = document.getElementById(areaId);
    const input = document.getElementById(inputId);
    const listId = inputId + 'List';

    if (!area || !input) return;

    // Click to browse
    area.addEventListener('click', () => input.click());

    // Drag and drop
    area.addEventListener('dragover', (e) => {
        e.preventDefault();
        area.style.borderColor = 'var(--color-primary-blue)';
        area.style.backgroundColor = 'var(--color-hover-bg)';
    });

    area.addEventListener('dragleave', (e) => {
        e.preventDefault();
        area.style.borderColor = 'var(--color-border-secondary)';
        area.style.backgroundColor = 'var(--color-bg-tertiary)';
    });

    area.addEventListener('drop', (e) => {
        e.preventDefault();
        area.style.borderColor = 'var(--color-border-secondary)';
        area.style.backgroundColor = 'var(--color-bg-tertiary)';

        const files = e.dataTransfer.files;
        handleFileSelection(files, inputId, listId, multiple);
    });

    // File input change
    input.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFileSelection(files, inputId, listId, multiple);
    });
}

/**
 * Handle file selection
 */
function handleFileSelection(files, inputId, listId, multiple) {
    if (!files || files.length === 0) return;

    const maxSize = 50 * 1024 * 1024; // 50MB

    for (let file of files) {
        // Validate file size
        if (file.size > maxSize) {
            alert(`File "${file.name}" is too large. Maximum size is 50MB.`);
            continue;
        }

        // Store file reference
        if (multiple) {
            uploadedFiles[inputId].push(file);
        } else {
            uploadedFiles[inputId] = file;
        }

        // Display file in list
        displayUploadedFile(file, inputId, listId, multiple);
    }
}

/**
 * Display uploaded file in the list
 */
function displayUploadedFile(file, inputId, listId, multiple) {
    const list = document.getElementById(listId);
    if (!list) return;

    const fileItem = document.createElement('div');
    fileItem.className = 'uploaded-file-item';
    fileItem.innerHTML = `
        <div class="uploaded-file-info">
            <div class="uploaded-file-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
            </div>
            <div class="uploaded-file-details">
                <div class="uploaded-file-name">${file.name}</div>
                <div class="uploaded-file-size">${formatFileSize(file.size)}</div>
            </div>
        </div>
        <button type="button" class="uploaded-file-remove" onclick="removeFile('${inputId}', '${file.name}', ${multiple})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    if (!multiple) {
        list.innerHTML = ''; // Clear previous file if not multiple
    }

    list.appendChild(fileItem);
}

/**
 * Remove uploaded file
 */
function removeFile(inputId, fileName, multiple) {
    if (multiple) {
        uploadedFiles[inputId] = uploadedFiles[inputId].filter(f => f.name !== fileName);
    } else {
        uploadedFiles[inputId] = null;
    }

    // Re-render file list
    const listId = inputId + 'List';
    const list = document.getElementById(listId);
    if (list) {
        list.innerHTML = '';

        if (multiple && uploadedFiles[inputId].length > 0) {
            uploadedFiles[inputId].forEach(file => {
                displayUploadedFile(file, inputId, listId, multiple);
            });
        }
    }
}

/**
 * Format file size
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Populate review summary in Step 4
 */
function populateReviewSummary() {
    const reviewSummary = document.getElementById('reviewSummary');
    if (!reviewSummary) return;

    const categoryNames = {
        'coal-mining': 'Coal Mining Technology',
        'safety': 'Mine Safety & Health',
        'environment': 'Environmental Sustainability',
        'energy': 'Energy Efficiency',
        'automation': 'Automation & AI',
        'geology': 'Geological Survey',
        'renewable': 'Renewable Energy Integration',
        'other': 'Other'
    };

    reviewSummary.innerHTML = `
        <div class="review-section">
            <h4 class="review-section-title">Basic Information</h4>
            <div class="review-item">
                <div class="review-label">Proposal Title:</div>
                <div class="review-value">${formData.proposalTitle || 'N/A'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Category:</div>
                <div class="review-value">${categoryNames[formData.category] || 'N/A'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Keywords:</div>
                <div class="review-value">${formData.keywords || 'N/A'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Budget:</div>
                <div class="review-value">₹ ${formData.budget} Lakhs</div>
            </div>
            <div class="review-item">
                <div class="review-label">Duration:</div>
                <div class="review-value">${formData.duration} Months</div>
            </div>
            <div class="review-item">
                <div class="review-label">Principal Investigator:</div>
                <div class="review-value">${formData.piName} (${formData.piOrganization})</div>
            </div>
        </div>
        
        <div class="review-section">
            <h4 class="review-section-title">Research Details</h4>
            <div class="review-item">
                <div class="review-label">Problem Statement:</div>
                <div class="review-value">${truncateText(formData.problemStatement, 200)}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Objectives:</div>
                <div class="review-value">${truncateText(formData.objectives, 200)}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Methodology:</div>
                <div class="review-value">${truncateText(formData.methodology, 200)}</div>
            </div>
        </div>
        
        <div class="review-section">
            <h4 class="review-section-title">Uploaded Documents</h4>
            <div class="review-item">
                <div class="review-label">Proposal Document:</div>
                <div class="review-value">${uploadedFiles.proposalDoc ? uploadedFiles.proposalDoc.name : 'Not uploaded'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Budget Breakdown:</div>
                <div class="review-value">${uploadedFiles.budgetDoc ? uploadedFiles.budgetDoc.name : 'Not uploaded'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">Supporting Documents:</div>
                <div class="review-value">${uploadedFiles.supportingDocs.length > 0 ? uploadedFiles.supportingDocs.length + ' file(s)' : 'None'}</div>
            </div>
            <div class="review-item">
                <div class="review-label">References:</div>
                <div class="review-value">${uploadedFiles.references ? uploadedFiles.references.name : 'None'}</div>
            </div>
        </div>
    `;
}

/**
 * Truncate text with ellipsis
 */
function truncateText(text, maxLength) {
    if (!text) return 'N/A';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

/**
 * Save as draft
 */
function saveDraft() {
    // Save current step data
    saveStepData(currentStep);

    // Store in localStorage
    localStorage.setItem('proposalDraft', JSON.stringify({
        formData: formData,
        currentStep: currentStep,
        timestamp: new Date().toISOString()
    }));

    // Show success message
    alert('Draft saved successfully! You can continue later from where you left off.');
}

/**
 * Load draft if exists
 */
function loadDraftIfExists() {
    const draft = localStorage.getItem('proposalDraft');
    if (draft) {
        const draftData = JSON.parse(draft);

        // Ask user if they want to continue
        if (confirm('A saved draft was found. Do you want to continue from where you left off?')) {
            formData = draftData.formData;

            // Populate form fields
            populateFormFields();

            // Show the saved step
            showStep(draftData.currentStep);
        } else {
            // Clear draft
            localStorage.removeItem('proposalDraft');
        }
    }
}

/**
 * Populate form fields from saved data
 */
function populateFormFields() {
    Object.keys(formData).forEach(key => {
        const field = document.getElementById(key);
        if (field) {
            field.value = formData[key];
        }
    });
}

/**
 * Handle form submission
 */
document.getElementById('proposalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate final step
    if (!validateStep(4)) {
        return;
    }

    // Save final step data
    saveStepData(4);

    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="spinner spinner-sm" style="border-color: #fff; border-top-color: transparent; margin: 0 auto;"></div>';

    // Simulate API call
    setTimeout(function () {
        // Generate unique proposal ID
        const proposalId = 'NACCER-2024-' + String(Math.floor(Math.random() * 900000) + 100000).padStart(6, '0');

        // Update modal with proposal ID
        document.getElementById('proposalId').textContent = proposalId;

        // Show success modal
        document.getElementById('successModal').style.display = 'flex';

        // Clear draft
        localStorage.removeItem('proposalDraft');

        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 2000);
});
