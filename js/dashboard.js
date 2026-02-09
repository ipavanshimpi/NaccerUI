/**
 * NaCCER AI Platform - Dashboard JavaScript
 * Government of India - Ministry of Coal (CMPDI)
 * 
 * Handles dashboard interactions, chart rendering, and dynamic updates
 */

document.addEventListener('DOMContentLoaded', function () {

    // Initialize Project Status Chart
    initializeStatusChart();

    // Add interactivity to table rows
    initializeTableInteractions();

    // Initialize user dropdown
    initializeUserDropdown();
});

/**
 * Initialize Project Status Overview Chart
 */
function initializeStatusChart() {
    const ctx = document.getElementById('statusChart');

    if (!ctx) return;

    // Sample data - replace with actual API data
    const data = {
        labels: [
            'Submitted',
            'Under Review',
            'Approved',
            'Rejected',
            'In Progress',
            'Completed'
        ],
        datasets: [{
            label: 'Number of Projects',
            data: [89, 156, 342, 78, 234, 348],
            backgroundColor: [
                '#D1D5DB', // Submitted - Gray
                '#FEF3C7', // Under Review - Amber Light
                '#D1FAE5', // Approved - Green Light
                '#FEE2E2', // Rejected - Red Light
                '#DBEAFE', // In Progress - Blue Light
                '#059669'  // Completed - Green
            ],
            borderColor: [
                '#9CA3AF',
                '#D97706',
                '#059669',
                '#DC2626',
                '#0284C7',
                '#047857'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1F2937',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return context.parsed.y + ' projects';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 12
                        },
                        precision: 0
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

/**
 * Add click interactions to table rows
 */
function initializeTableInteractions() {
    const tableRows = document.querySelectorAll('.table tbody tr');

    tableRows.forEach(row => {
        // Make entire row clickable (except action buttons)
        row.addEventListener('click', function (e) {
            // Don't trigger if clicking on a button
            if (e.target.closest('button')) {
                return;
            }

            // Get proposal ID from the row
            const proposalId = this.querySelector('.monospace').textContent;

            // Redirect to proposal detail page
            // window.location.href = `proposal-detail.html?id=${proposalId}`;
            console.log('Navigating to proposal:', proposalId);
        });

        // Add hover effect
        row.style.cursor = 'pointer';
    });

    // Handle View buttons
    const viewButtons = document.querySelectorAll('.table .btn-tertiary');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent row click
            const row = this.closest('tr');
            const proposalId = row.querySelector('.monospace').textContent;
            console.log('View button clicked for:', proposalId);
            // window.location.href = `proposal-detail.html?id=${proposalId}`;
        });
    });
}

/**
 * Initialize user dropdown menu
 */
function initializeUserDropdown() {
    const userElement = document.querySelector('.navbar-user');

    if (!userElement) return;

    // Create dropdown menu
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.innerHTML = `
        <a href="user-profile.html" class="dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            My Profile
        </a>
        <a href="settings.html" class="dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6m-13.2 5.2l4.2-4.2m0-6l-4.2-4.2"></path>
            </svg>
            Settings
        </a>
        <div class="dropdown-divider"></div>
        <a href="index.html" class="dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
        </a>
    `;

    userElement.style.position = 'relative';
    userElement.appendChild(dropdownMenu);

    // Toggle dropdown on click
    userElement.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });
}

/**
 * Quick action button handlers
 */
const quickActionButtons = document.querySelectorAll('.quick-action-btn');
quickActionButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const actionText = this.querySelector('span').textContent;

        switch (actionText) {
            case 'Submit Proposal':
                window.location.href = 'proposal-submission.html';
                break;
            case 'Browse Repository':
                window.location.href = 'repository.html';
                break;
            case 'View My Projects':
                window.location.href = 'project-tracking.html';
                break;
            case 'Generate Report':
                window.location.href = 'reports.html';
                break;
            default:
                console.log('Quick action:', actionText);
        }
    });
});

/**
 * Notification item click handlers
 */
const notificationItems = document.querySelectorAll('.notification-item');
notificationItems.forEach(item => {
    item.addEventListener('click', function () {
        // Mark as read (visual feedback)
        this.style.backgroundColor = 'transparent';

        // Navigate to relevant page based on notification type
        const title = this.querySelector('.notification-title').textContent;
        console.log('Notification clicked:', title);

        // Example: redirect based on notification type
        // if (title.includes('Proposal')) {
        //     window.location.href = 'proposal-list.html';
        // }
    });
});

/**
 * Utility function to format numbers
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Utility function to update stat cards (for real-time updates)
 */
function updateStatCard(cardIndex, newValue) {
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards[cardIndex]) {
        const valueElement = statCards[cardIndex].querySelector('.stat-value');
        if (valueElement) {
            valueElement.textContent = formatNumber(newValue);
        }
    }
}

// Example: Auto-refresh data every 30 seconds (optional)
// setInterval(function() {
//     // Fetch updated data from API
//     // updateStatCard(0, newTotalProposals);
//     // updateStatusChart(newData);
// }, 30000);
