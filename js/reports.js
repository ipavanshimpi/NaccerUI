// Reports & Analytics JavaScript
// Handles chart rendering, tab switching, and custom report builder

// Chart instances
let charts = {};

// Government-appropriate color palette
const colors = {
    primary: '#2563EB',
    navy: '#1E3A8A',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
    info: '#0891B2',
    gray: '#6B7280',
    lightGray: '#9CA3AF'
};

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    initializeOverviewCharts();
});

// Switch report tabs
function switchReportTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    // Show selected tab content
    const selectedTab = document.getElementById(`${tabName}-tab`);
    selectedTab.classList.add('active');
    selectedTab.style.display = 'block';

    // Initialize charts for the selected tab
    switch (tabName) {
        case 'overview':
            if (!charts.proposalsOverTime) initializeOverviewCharts();
            break;
        case 'proposals':
            if (!charts.proposalTrends) initializeProposalCharts();
            break;
        case 'projects':
            if (!charts.timelineAdherence) initializeProjectCharts();
            break;
        case 'reviewers':
            if (!charts.workloadDistribution) {
                initializeReviewerCharts();
                populateReviewerTable();
            }
            break;
        case 'budget':
            if (!charts.budgetUtilization) initializeBudgetCharts();
            break;
    }
}

// Initialize Overview Charts
function initializeOverviewCharts() {
    // Proposals Over Time (Line Chart)
    const ctx1 = document.getElementById('proposalsOverTimeChart').getContext('2d');
    charts.proposalsOverTime = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Proposals Submitted',
                data: [45, 52, 48, 61, 58, 67, 72, 69, 78, 84, 91, 98],
                borderColor: colors.primary,
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return value;
                        }
                    }
                }
            }
        }
    });

    // Proposals by Category (Bar Chart)
    const ctx2 = document.getElementById('proposalsByCategoryChart').getContext('2d');
    charts.proposalsByCategory = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Coal Mining Tech', 'Safety & Health', 'AI & Automation', 'Environment', 'Energy Efficiency'],
            datasets: [{
                label: 'Number of Proposals',
                data: [342, 289, 234, 198, 184],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.navy,
                    colors.info,
                    colors.warning
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Status Distribution (Doughnut Chart)
    const ctx3 = document.getElementById('statusDistributionChart').getContext('2d');
    charts.statusDistribution = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Approved', 'Under Review', 'Submitted', 'Rejected', 'On Hold'],
            datasets: [{
                data: [456, 312, 234, 189, 56],
                backgroundColor: [
                    colors.success,
                    colors.info,
                    colors.primary,
                    colors.error,
                    colors.gray
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Budget Allocation (Horizontal Bar Chart)
    const ctx4 = document.getElementById('budgetAllocationChart').getContext('2d');
    charts.budgetAllocation = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024'],
            datasets: [{
                label: 'Budget Allocated (₹ Crores)',
                data: [45.2, 52.8, 68.4, 89.6, 86.5],
                backgroundColor: colors.navy
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '₹' + value + ' Cr';
                        }
                    }
                }
            }
        }
    });
}

// Initialize Proposal Analytics Charts
function initializeProposalCharts() {
    // Proposal Trends (Line Chart)
    const ctx1 = document.getElementById('proposalTrendsChart').getContext('2d');
    charts.proposalTrends = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Submitted',
                    data: [45, 52, 48, 61, 58, 67, 72, 69, 78, 84, 91, 98],
                    borderColor: colors.primary,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Approved',
                    data: [28, 34, 31, 42, 38, 45, 49, 47, 53, 58, 62, 67],
                    borderColor: colors.success,
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Rejected',
                    data: [12, 14, 13, 15, 16, 18, 19, 18, 21, 22, 24, 26],
                    borderColor: colors.error,
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Average Scores by Category (Bar Chart)
    const ctx2 = document.getElementById('avgScoresByCategoryChart').getContext('2d');
    charts.avgScoresByCategory = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Coal Mining', 'Safety', 'AI & Auto', 'Environment', 'Energy'],
            datasets: [{
                label: 'Average AI Score',
                data: [78.5, 82.3, 85.7, 79.2, 81.4],
                backgroundColor: colors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // Approval Rates Over Time (Line Chart)
    const ctx3 = document.getElementById('approvalRatesChart').getContext('2d');
    charts.approvalRates = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Approval Rate (%)',
                data: [62.2, 65.4, 64.6, 68.9, 65.5, 67.2, 68.1, 68.1, 67.9, 69.0, 68.1, 68.4],
                borderColor: colors.success,
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Initialize Project Analytics Charts
function initializeProjectCharts() {
    const ctx = document.getElementById('timelineAdherenceChart').getContext('2d');
    charts.timelineAdherence = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['On Track', 'Minor Delay', 'At Risk', 'Critical Delay', 'Ahead of Schedule'],
            datasets: [{
                label: 'Number of Projects',
                data: [89, 34, 18, 8, 7],
                backgroundColor: [
                    colors.success,
                    colors.warning,
                    '#F59E0B',
                    colors.error,
                    colors.info
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize Reviewer Analytics Charts
function initializeReviewerCharts() {
    // Workload Distribution (Pie Chart)
    const ctx1 = document.getElementById('workloadDistributionChart').getContext('2d');
    charts.workloadDistribution = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Dr. Kumar', 'Prof. Sharma', 'Dr. Singh', 'Dr. Patel', 'Others'],
            datasets: [{
                data: [89, 76, 68, 54, 156],
                backgroundColor: [
                    colors.primary,
                    colors.success,
                    colors.navy,
                    colors.info,
                    colors.gray
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Review Time by Expertise (Bar Chart)
    const ctx2 = document.getElementById('reviewTimeByExpertiseChart').getContext('2d');
    charts.reviewTimeByExpertise = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Coal Mining', 'Safety', 'AI/ML', 'Environment', 'Energy'],
            datasets: [{
                label: 'Average Review Time (days)',
                data: [11.2, 13.5, 9.8, 14.2, 12.6],
                backgroundColor: colors.info
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return value + ' days';
                        }
                    }
                }
            }
        }
    });
}

// Populate Reviewer Metrics Table
function populateReviewerTable() {
    const reviewers = [
        { name: 'Dr. Rajesh Kumar', assigned: 89, completed: 84, avgTime: '11.2 days', expertise: 'Coal Mining Technology', quality: 9.2 },
        { name: 'Prof. Anita Sharma', assigned: 76, completed: 73, avgTime: '13.5 days', expertise: 'Safety & Health', quality: 9.0 },
        { name: 'Dr. Vikram Singh', assigned: 68, completed: 67, avgTime: '9.8 days', expertise: 'AI & Machine Learning', quality: 9.5 },
        { name: 'Dr. Priya Patel', assigned: 54, completed: 52, avgTime: '14.2 days', expertise: 'Environmental Science', quality: 8.8 },
        { name: 'Dr. Amit Verma', assigned: 48, completed: 46, avgTime: '12.6 days', expertise: 'Energy Efficiency', quality: 9.1 },
        { name: 'Prof. Sunita Rao', assigned: 42, completed: 41, avgTime: '10.5 days', expertise: 'Coal Processing', quality: 9.3 },
        { name: 'Dr. Manoj Singh', assigned: 38, completed: 36, avgTime: '15.1 days', expertise: 'Geophysics', quality: 8.7 },
        { name: 'Dr. Kavita Sharma', assigned: 34, completed: 33, avgTime: '11.8 days', expertise: 'Water Management', quality: 9.0 }
    ];

    const tbody = document.getElementById('reviewerMetricsTable');
    let html = '';

    reviewers.forEach(reviewer => {
        const completionRate = ((reviewer.completed / reviewer.assigned) * 100).toFixed(1);
        html += `
            <tr>
                <td><strong>${reviewer.name}</strong></td>
                <td>${reviewer.assigned}</td>
                <td>
                    ${reviewer.completed}
                    <span class="badge badge-success" style="margin-left: 8px; font-size: 11px;">${completionRate}%</span>
                </td>
                <td>${reviewer.avgTime}</td>
                <td>${reviewer.expertise}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="progress" style="width: 100px;">
                            <div class="progress-bar" style="width: ${reviewer.quality * 10}%; background-color: var(--color-success);"></div>
                        </div>
                        <span class="text-sm"><strong>${reviewer.quality}/10</strong></span>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

// Initialize Budget Analytics Charts
function initializeBudgetCharts() {
    // Budget Utilization Trend (Line Chart)
    const ctx1 = document.getElementById('budgetUtilizationChart').getContext('2d');
    charts.budgetUtilization = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Allocated (₹ Cr)',
                    data: [45.2, 52.8, 68.4, 89.6, 112.3, 134.7, 158.2, 182.5, 208.9, 235.4, 262.8, 342.5],
                    borderColor: colors.primary,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Utilized (₹ Cr)',
                    data: [32.1, 41.5, 54.2, 68.9, 85.3, 102.8, 121.4, 142.6, 165.2, 189.7, 215.3, 256.8],
                    borderColor: colors.success,
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '₹' + value + ' Cr';
                        }
                    }
                }
            }
        }
    });

    // Department-wise Spending (Doughnut Chart)
    const ctx2 = document.getElementById('departmentSpendingChart').getContext('2d');
    charts.departmentSpending = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['R&D', 'Infrastructure', 'Technology', 'Training', 'Operations'],
            datasets: [{
                data: [98.5, 76.2, 54.3, 28.7, 22.1],
                backgroundColor: [
                    colors.primary,
                    colors.navy,
                    colors.info,
                    colors.success,
                    colors.warning
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Budget vs Actual (Grouped Bar Chart)
    const ctx3 = document.getElementById('budgetVsActualChart').getContext('2d');
    charts.budgetVsActual = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Budgeted',
                    data: [85.6, 89.2, 92.4, 75.3],
                    backgroundColor: colors.primary
                },
                {
                    label: 'Actual',
                    data: [78.3, 84.5, 88.2, 70.1],
                    backgroundColor: colors.success
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return '₹' + value + ' Cr';
                        }
                    }
                }
            }
        }
    });
}
