/**
 * NaCCER AI Platform - Proposal Detail JavaScript
 * Government of India - Ministry of Coal (CMPDI)
 * 
 * Handles tab switching, Chart.js visualization, and dynamic content
 */

let scoreBreakdownChart = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the score breakdown chart
    initializeScoreBreakdownChart();

    // Load proposal data from URL parameter (if available)
    loadProposalData();
});

/**
 * Switch between tabs
 */
function switchTab(tabName) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Initialize score breakdown chart
 */
function initializeScoreBreakdownChart() {
    const ctx = document.getElementById('scoreBreakdownChart');
    if (!ctx) return;

    scoreBreakdownChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Innovation', 'Feasibility', 'Methodology', 'Cost-Effectiveness', 'Impact'],
            datasets: [{
                label: 'Score',
                data: [85, 78, 92, 70, 88],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',   // Official Blue
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(5, 150, 105, 0.8)',   // Success Green (highest)
                    'rgba(217, 119, 6, 0.8)',   // Warning Amber (lowest)
                    'rgba(37, 99, 235, 0.8)'
                ],
                borderColor: [
                    'rgba(37, 99, 235, 1)',
                    'rgba(37, 99, 235, 1)',
                    'rgba(5, 150, 105, 1)',
                    'rgba(217, 119, 6, 1)',
                    'rgba(37, 99, 235, 1)'
                ],
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 41, 55, 0.95)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: '600'
                    },
                    bodyFont: {
                        size: 13
                    },
                    borderColor: 'rgba(229, 231, 235, 0.2)',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return 'Score: ' + context.parsed.y + '/100';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6B7280',
                        callback: function (value) {
                            return value;
                        }
                    },
                    grid: {
                        color: 'rgba(229, 231, 235, 0.5)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6B7280'
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

/**
 * Load proposal data from URL parameter
 */
function loadProposalData() {
    const urlParams = new URLSearchParams(window.location.search);
    const proposalId = urlParams.get('id');

    if (proposalId) {
        // In a real application, this would fetch data from an API
        // For now, we'll just update the proposal ID in the header
        console.log('Loading proposal:', proposalId);

        // You could add logic here to fetch and populate proposal details
        // based on the ID from the URL
    }
}

/**
 * Format date helper
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

/**
 * Download report functionality
 */
function downloadReport() {
    // Simulate report download
    alert('Downloading comprehensive proposal report...');
    // In a real application, this would trigger a PDF download
}

/**
 * Edit proposal functionality
 */
function editProposal() {
    const proposalId = document.getElementById('proposalId').textContent;
    window.location.href = `proposal-submission.html?edit=${proposalId}`;
}

/**
 * Download document functionality
 */
function downloadDocument(documentName) {
    alert(`Downloading ${documentName}...`);
    // In a real application, this would trigger the actual file download
}

/**
 * Preview document functionality
 */
function previewDocument(documentName) {
    alert(`Opening preview for ${documentName}...`);
    // In a real application, this would open a document viewer modal
}
