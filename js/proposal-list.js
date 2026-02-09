/**
 * NaCCER AI Platform - Proposal List JavaScript
 * Government of India - Ministry of Coal (CMPDI)
 * 
 * Handles proposal list display, search, filtering, sorting, and pagination
 */

// Sample proposal data (realistic)
const allProposals = [
    {
        id: 'PROP-2024-1247',
        title: 'AI-Based Coal Quality Assessment System',
        submittedBy: 'Dr. Rajesh Kumar',
        category: 'Automation & AI',
        submissionDate: '2024-02-08',
        status: 'under-review',
        aiScore: 84,
        budget: 125.5
    },
    {
        id: 'PROP-2024-1246',
        title: 'Automated Mine Safety Monitoring Platform',
        submittedBy: 'Prof. Anita Sharma',
        category: 'Mine Safety & Health',
        submissionDate: '2024-02-07',
        status: 'in-progress',
        aiScore: 92,
        budget: 180.0
    },
    {
        id: 'PROP-2024-1245',
        title: 'Renewable Energy Integration for Mining Operations',
        submittedBy: 'Dr. Vikram Singh',
        category: 'Renewable Energy Integration',
        submissionDate: '2024-02-06',
        status: 'approved',
        aiScore: 88,
        budget: 250.0
    },
    {
        id: 'PROP-2024-1244',
        title: 'Methane Emission Monitoring Using IoT Sensors',
        submittedBy: 'Dr. Priya Patel',
        category: 'Environmental Sustainability',
        submissionDate: '2024-02-05',
        status: 'under-review',
        aiScore: 76,
        budget: 95.0
    },
    {
        id: 'PROP-2024-1243',
        title: 'Underground Safety Enhancement Framework',
        submittedBy: 'Dr. Arun Mehta',
        category: 'Mine Safety & Health',
        submissionDate: '2024-02-04',
        status: 'approved',
        aiScore: 91,
        budget: 165.0
    },
    {
        id: 'PROP-2024-1242',
        title: 'Coal Seam Detection Using Machine Learning',
        submittedBy: 'Prof. Sunita Reddy',
        category: 'Geological Survey',
        submissionDate: '2024-02-03',
        status: 'in-progress',
        aiScore: 85,
        budget: 140.0
    },
    {
        id: 'PROP-2024-1241',
        title: 'Energy Efficiency Optimization in Coal Processing',
        submittedBy: 'Dr. Ramesh Gupta',
        category: 'Energy Efficiency',
        submissionDate: '2024-02-02',
        status: 'submitted',
        aiScore: null,
        budget: 110.0
    },
    {
        id: 'PROP-2024-1240',
        title: 'Predictive Maintenance System for Mining Equipment',
        submittedBy: 'Dr. Kavita Joshi',
        category: 'Automation & AI',
        submissionDate: '2024-02-01',
        status: 'approved',
        aiScore: 89,
        budget: 175.0
    },
    {
        id: 'PROP-2024-1239',
        title: 'Water Management System for Coal Mines',
        submittedBy: 'Dr. Suresh Nair',
        category: 'Environmental Sustainability',
        submissionDate: '2024-01-31',
        status: 'rejected',
        aiScore: 62,
        budget: 85.0
    },
    {
        id: 'PROP-2024-1238',
        title: 'Autonomous Drilling Technology Development',
        submittedBy: 'Prof. Deepak Verma',
        category: 'Automation & AI',
        submissionDate: '2024-01-30',
        status: 'in-progress',
        aiScore: 87,
        budget: 220.0
    },
    {
        id: 'PROP-2024-1237',
        title: 'Real-Time Air Quality Monitoring in Underground Mines',
        submittedBy: 'Dr. Meena Iyer',
        category: 'Mine Safety & Health',
        submissionDate: '2024-01-29',
        status: 'under-review',
        aiScore: 79,
        budget: 105.0
    },
    {
        id: 'PROP-2024-1236',
        title: 'Coal Dust Suppression Using Nanotechnology',
        submittedBy: 'Dr. Amit Desai',
        category: 'Environmental Sustainability',
        submissionDate: '2024-01-28',
        status: 'approved',
        aiScore: 83,
        budget: 130.0
    },
    {
        id: 'PROP-2024-1235',
        title: 'Geological Hazard Prediction Model',
        submittedBy: 'Prof. Ravi Shankar',
        category: 'Geological Survey',
        submissionDate: '2024-01-27',
        status: 'under-review',
        aiScore: 81,
        budget: 155.0
    },
    {
        id: 'PROP-2024-1234',
        title: 'Smart Ventilation Control System',
        submittedBy: 'Dr. Neha Kapoor',
        category: 'Energy Efficiency',
        submissionDate: '2024-01-26',
        status: 'approved',
        aiScore: 86,
        budget: 145.0
    },
    {
        id: 'PROP-2024-1233',
        title: 'Blockchain-Based Coal Supply Chain Tracking',
        submittedBy: 'Dr. Sanjay Malhotra',
        category: 'Coal Mining Technology',
        submissionDate: '2024-01-25',
        status: 'submitted',
        aiScore: null,
        budget: 95.0
    },
    {
        id: 'PROP-2024-1232',
        title: 'Thermal Imaging for Fire Detection in Mines',
        submittedBy: 'Dr. Pooja Agarwal',
        category: 'Mine Safety & Health',
        submissionDate: '2024-01-24',
        status: 'in-progress',
        aiScore: 90,
        budget: 160.0
    },
    {
        id: 'PROP-2024-1231',
        title: 'Solar Power Integration for Remote Mining Sites',
        submittedBy: 'Prof. Kiran Bedi',
        category: 'Renewable Energy Integration',
        submissionDate: '2024-01-23',
        status: 'approved',
        aiScore: 85,
        budget: 280.0
    },
    {
        id: 'PROP-2024-1230',
        title: 'Robotic Inspection System for Hazardous Areas',
        submittedBy: 'Dr. Vijay Rao',
        category: 'Automation & AI',
        submissionDate: '2024-01-22',
        status: 'under-review',
        aiScore: 88,
        budget: 195.0
    },
    {
        id: 'PROP-2024-1229',
        title: 'Carbon Capture and Storage in Coal Mines',
        submittedBy: 'Dr. Lakshmi Menon',
        category: 'Environmental Sustainability',
        submissionDate: '2024-01-21',
        status: 'rejected',
        aiScore: 58,
        budget: 320.0
    },
    {
        id: 'PROP-2024-1228',
        title: 'Advanced Geophysical Survey Techniques',
        submittedBy: 'Prof. Harish Chandra',
        category: 'Geological Survey',
        submissionDate: '2024-01-20',
        status: 'approved',
        aiScore: 84,
        budget: 170.0
    },
    {
        id: 'PROP-2024-1227',
        title: 'Worker Health Monitoring Wearable Devices',
        submittedBy: 'Dr. Sneha Kulkarni',
        category: 'Mine Safety & Health',
        submissionDate: '2024-01-19',
        status: 'in-progress',
        aiScore: 82,
        budget: 115.0
    },
    {
        id: 'PROP-2024-1226',
        title: 'Intelligent Load Optimization for Conveyor Systems',
        submittedBy: 'Dr. Prakash Jain',
        category: 'Energy Efficiency',
        submissionDate: '2024-01-18',
        status: 'under-review',
        aiScore: 77,
        budget: 125.0
    },
    {
        id: 'PROP-2024-1225',
        title: 'Digital Twin Technology for Mine Planning',
        submittedBy: 'Prof. Madhuri Dixit',
        category: 'Automation & AI',
        submissionDate: '2024-01-17',
        status: 'approved',
        aiScore: 93,
        budget: 240.0
    },
    {
        id: 'PROP-2024-1224',
        title: 'Biodiversity Conservation in Mining Areas',
        submittedBy: 'Dr. Arjun Pillai',
        category: 'Environmental Sustainability',
        submissionDate: '2024-01-16',
        status: 'submitted',
        aiScore: null,
        budget: 90.0
    },
    {
        id: 'PROP-2024-1223',
        title: 'Seismic Activity Monitoring and Prediction',
        submittedBy: 'Dr. Geeta Krishnan',
        category: 'Geological Survey',
        submissionDate: '2024-01-15',
        status: 'under-review',
        aiScore: 80,
        budget: 185.0
    }
];

// Pagination state
let currentPage = 1;
let itemsPerPage = 25;
let filteredProposals = [...allProposals];

// Filter state
let activeFilters = {
    search: '',
    status: [],
    category: '',
    dateFrom: '',
    dateTo: '',
    budgetMin: '',
    budgetMax: ''
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initializeEventListeners();
    renderProposals();
    renderPagination();
});

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Clear search
    document.getElementById('clearSearch').addEventListener('click', clearSearch);

    // Filter toggle
    document.getElementById('filterToggleBtn').addEventListener('click', toggleFilterPanel);

    // Apply filters
    document.getElementById('applyFilters').addEventListener('click', applyFilters);

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);

    // Per page selector
    document.getElementById('perPage').addEventListener('change', handlePerPageChange);
}

/**
 * Handle search input
 */
function handleSearch(e) {
    const searchTerm = e.target.value.trim();
    activeFilters.search = searchTerm;

    // Show/hide clear button
    document.getElementById('clearSearch').style.display = searchTerm ? 'block' : 'none';

    // Apply filters and render
    filterProposals();
    currentPage = 1;
    renderProposals();
    renderPagination();
}

/**
 * Clear search
 */
function clearSearch() {
    document.getElementById('searchInput').value = '';
    activeFilters.search = '';
    document.getElementById('clearSearch').style.display = 'none';

    filterProposals();
    currentPage = 1;
    renderProposals();
    renderPagination();
}

/**
 * Toggle filter panel
 */
function toggleFilterPanel() {
    const panel = document.getElementById('filterPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

/**
 * Apply filters
 */
function applyFilters() {
    // Get status filters
    const statusCheckboxes = document.querySelectorAll('input[name="status"]:checked');
    activeFilters.status = Array.from(statusCheckboxes).map(cb => cb.value);

    // Get category filter
    activeFilters.category = document.getElementById('categoryFilter').value;

    // Get date range
    activeFilters.dateFrom = document.getElementById('dateFrom').value;
    activeFilters.dateTo = document.getElementById('dateTo').value;

    // Get budget range
    activeFilters.budgetMin = document.getElementById('budgetMin').value;
    activeFilters.budgetMax = document.getElementById('budgetMax').value;

    // Update filter count
    updateFilterCount();

    // Apply filters and render
    filterProposals();
    currentPage = 1;
    renderProposals();
    renderPagination();

    // Close filter panel
    document.getElementById('filterPanel').style.display = 'none';
}

/**
 * Clear all filters
 */
function clearAllFilters() {
    // Clear status checkboxes
    document.querySelectorAll('input[name="status"]').forEach(cb => cb.checked = false);

    // Clear category
    document.getElementById('categoryFilter').value = '';

    // Clear date range
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';

    // Clear budget range
    document.getElementById('budgetMin').value = '';
    document.getElementById('budgetMax').value = '';

    // Reset active filters
    activeFilters = {
        search: activeFilters.search, // Keep search
        status: [],
        category: '',
        dateFrom: '',
        dateTo: '',
        budgetMin: '',
        budgetMax: ''
    };

    // Update filter count
    updateFilterCount();

    // Apply filters and render
    filterProposals();
    currentPage = 1;
    renderProposals();
    renderPagination();
}

/**
 * Update filter count badge
 */
function updateFilterCount() {
    let count = 0;

    if (activeFilters.status.length > 0) count++;
    if (activeFilters.category) count++;
    if (activeFilters.dateFrom || activeFilters.dateTo) count++;
    if (activeFilters.budgetMin || activeFilters.budgetMax) count++;

    const badge = document.getElementById('filterCount');
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-flex';
    } else {
        badge.style.display = 'none';
    }
}

/**
 * Filter proposals based on active filters
 */
function filterProposals() {
    filteredProposals = allProposals.filter(proposal => {
        // Search filter
        if (activeFilters.search) {
            const searchLower = activeFilters.search.toLowerCase();
            const matchesSearch =
                proposal.id.toLowerCase().includes(searchLower) ||
                proposal.title.toLowerCase().includes(searchLower) ||
                proposal.submittedBy.toLowerCase().includes(searchLower) ||
                proposal.category.toLowerCase().includes(searchLower);

            if (!matchesSearch) return false;
        }

        // Status filter
        if (activeFilters.status.length > 0) {
            if (!activeFilters.status.includes(proposal.status)) return false;
        }

        // Category filter
        if (activeFilters.category) {
            const categoryMap = {
                'coal-mining': 'Coal Mining Technology',
                'safety': 'Mine Safety & Health',
                'environment': 'Environmental Sustainability',
                'energy': 'Energy Efficiency',
                'automation': 'Automation & AI',
                'geology': 'Geological Survey',
                'renewable': 'Renewable Energy Integration'
            };

            if (proposal.category !== categoryMap[activeFilters.category]) return false;
        }

        // Date range filter
        if (activeFilters.dateFrom) {
            if (proposal.submissionDate < activeFilters.dateFrom) return false;
        }
        if (activeFilters.dateTo) {
            if (proposal.submissionDate > activeFilters.dateTo) return false;
        }

        // Budget range filter
        if (activeFilters.budgetMin) {
            if (proposal.budget < parseFloat(activeFilters.budgetMin)) return false;
        }
        if (activeFilters.budgetMax) {
            if (proposal.budget > parseFloat(activeFilters.budgetMax)) return false;
        }

        return true;
    });
}

/**
 * Handle per page change
 */
function handlePerPageChange(e) {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderProposals();
    renderPagination();
}

/**
 * Render proposals table
 */
function renderProposals() {
    const tbody = document.getElementById('proposalsTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProposals = filteredProposals.slice(start, end);

    if (pageProposals.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 48px; color: var(--color-text-secondary);">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin: 0 auto 16px; opacity: 0.3;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <p style="font-size: 16px; margin: 0;">No proposals found matching your criteria</p>
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = pageProposals.map(proposal => `
            <tr onclick="window.location.href='proposal-detail.html?id=${proposal.id}'" style="cursor: pointer;">
                <td class="monospace">${proposal.id}</td>
                <td><strong>${proposal.title}</strong></td>
                <td>${proposal.submittedBy}</td>
                <td>${proposal.category}</td>
                <td>${formatDate(proposal.submissionDate)}</td>
                <td>${renderStatusBadge(proposal.status)}</td>
                <td>${renderAIScore(proposal.aiScore)}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-tertiary" onclick="event.stopPropagation(); window.location.href='proposal-detail.html?id=${proposal.id}'">View</button>
                </td>
            </tr>
        `).join('');
    }

    // Update results summary
    updateResultsSummary(start, end);
}

/**
 * Render status badge
 */
function renderStatusBadge(status) {
    const statusMap = {
        'submitted': { label: 'Submitted', class: 'badge-neutral' },
        'under-review': { label: 'Under Review', class: 'badge-warning' },
        'approved': { label: 'Approved', class: 'badge-success' },
        'rejected': { label: 'Rejected', class: 'badge-error' },
        'in-progress': { label: 'In Progress', class: 'badge-info' }
    };

    const statusInfo = statusMap[status] || { label: status, class: 'badge-neutral' };
    return `<span class="badge ${statusInfo.class}">${statusInfo.label}</span>`;
}

/**
 * Render AI score
 */
function renderAIScore(score) {
    if (score === null) {
        return '<span class="text-secondary" style="font-size: 13px;">Pending</span>';
    }

    let scoreClass = 'high';
    if (score < 70) scoreClass = 'low';
    else if (score < 80) scoreClass = 'medium';

    return `
        <div class="ai-score">
            <span class="ai-score-value">${score}</span>
            <div class="ai-score-bar">
                <div class="ai-score-fill ${scoreClass}" style="width: ${score}%"></div>
            </div>
        </div>
    `;
}

/**
 * Format date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

/**
 * Update results summary
 */
function updateResultsSummary(start, end) {
    const actualEnd = Math.min(end, filteredProposals.length);
    document.getElementById('resultsStart').textContent = filteredProposals.length > 0 ? start + 1 : 0;
    document.getElementById('resultsEnd').textContent = actualEnd;
    document.getElementById('resultsTotal').textContent = filteredProposals.length;
}

/**
 * Render pagination
 */
function renderPagination() {
    const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);
    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // Previous button
    html += `
        <button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" 
                onclick="goToPage(${currentPage - 1})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
        </button>
    `;

    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        html += `<button class="pagination-btn" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            html += `<span class="pagination-ellipsis">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="goToPage(${i})">
                ${i}
            </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="pagination-ellipsis">...</span>`;
        }
        html += `<button class="pagination-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    html += `
        <button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                onclick="goToPage(${currentPage + 1})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    `;

    pagination.innerHTML = html;
}

/**
 * Go to specific page
 */
function goToPage(page) {
    const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProposals();
    renderPagination();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
