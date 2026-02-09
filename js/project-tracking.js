// Project Tracking JavaScript
// Handles timeline visualization, milestone management, and project data

// Sample project data
const projectData = {
    'proj-001': {
        id: 'NACCER-PRJ-2023-0042',
        title: 'AI-Based Coal Quality Assessment System',
        lead: 'Dr. Rajesh Kumar',
        startDate: 'Jan 15, 2023',
        endDate: 'Apr 30, 2024',
        teamSize: 6,
        status: 'In Progress',
        statusType: 'On Track',
        progress: 67,
        budget: { used: 45.2, total: 65 },
        timeline: { current: 8, total: 12 },
        milestones: { achieved: 12, total: 18 },
        deliverables: { completed: 15, total: 22 }
    },
    'proj-002': {
        id: 'NACCER-PRJ-2023-0038',
        title: 'Automated Mine Safety Monitoring Platform',
        lead: 'Prof. Anita Sharma',
        startDate: 'Mar 01, 2023',
        endDate: 'Jun 30, 2024',
        teamSize: 8,
        status: 'In Progress',
        statusType: 'At Risk',
        progress: 55,
        budget: { used: 62.8, total: 85 },
        timeline: { current: 11, total: 16 },
        milestones: { achieved: 14, total: 24 },
        deliverables: { completed: 18, total: 30 }
    }
};

// Timeline milestones data
const timelineMilestones = [
    { name: 'Project Kickoff', date: 'Jan 2023', status: 'completed' },
    { name: 'Phase 1 Complete', date: 'Mar 2023', status: 'completed' },
    { name: 'Phase 2 Complete', date: 'Jun 2023', status: 'completed' },
    { name: 'Phase 3 Development', date: 'Nov 2023', status: 'current' },
    { name: 'Phase 4 Testing', date: 'Feb 2024', status: 'upcoming' },
    { name: 'Deployment', date: 'Apr 2024', status: 'upcoming' }
];

// Detailed milestones for table
const detailedMilestones = [
    {
        id: 1,
        name: 'Requirements Gathering',
        dueDate: 'Feb 15, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Dr. Rajesh Kumar',
        statusClass: 'success',
        description: 'Comprehensive requirements analysis and stakeholder interviews completed.'
    },
    {
        id: 2,
        name: 'System Design & Architecture',
        dueDate: 'Mar 30, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Amit Patel',
        statusClass: 'success',
        description: 'System architecture finalized with AI model selection and database design.'
    },
    {
        id: 3,
        name: 'Database Development',
        dueDate: 'May 15, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Priya Sharma',
        statusClass: 'success',
        description: 'PostgreSQL database with optimized schema and indexing implemented.'
    },
    {
        id: 4,
        name: 'AI Model Training - Phase 1',
        dueDate: 'Jul 30, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Dr. Vikram Singh',
        statusClass: 'success',
        description: 'Initial AI model trained with 85% accuracy on coal quality assessment.'
    },
    {
        id: 5,
        name: 'Frontend Development - Core UI',
        dueDate: 'Sep 15, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Neha Gupta',
        statusClass: 'success',
        description: 'Core user interface with responsive design completed.'
    },
    {
        id: 6,
        name: 'Backend API Development',
        dueDate: 'Oct 30, 2023',
        status: 'Completed',
        completion: 100,
        responsible: 'Rahul Mehta',
        statusClass: 'success',
        description: 'RESTful API with authentication and authorization implemented.'
    },
    {
        id: 7,
        name: 'AI Model Training - Phase 2',
        dueDate: 'Dec 15, 2023',
        status: 'In Progress',
        completion: 85,
        responsible: 'Dr. Vikram Singh',
        statusClass: 'info',
        description: 'Advanced model training with expanded dataset. Target: 92% accuracy.'
    },
    {
        id: 8,
        name: 'Integration Testing',
        dueDate: 'Jan 31, 2024',
        status: 'In Progress',
        completion: 60,
        responsible: 'Amit Patel',
        statusClass: 'warning',
        description: 'System integration testing in progress. Some API issues identified.'
    },
    {
        id: 9,
        name: 'Frontend - Advanced Features',
        dueDate: 'Feb 28, 2024',
        status: 'In Progress',
        completion: 45,
        responsible: 'Neha Gupta',
        statusClass: 'warning',
        description: 'Implementing data visualization and reporting features.'
    },
    {
        id: 10,
        name: 'Security Audit',
        dueDate: 'Mar 15, 2024',
        status: 'Not Started',
        completion: 0,
        responsible: 'Security Team',
        statusClass: 'secondary',
        description: 'Comprehensive security audit and penetration testing.'
    },
    {
        id: 11,
        name: 'Performance Optimization',
        dueDate: 'Mar 30, 2024',
        status: 'Not Started',
        completion: 0,
        responsible: 'Rahul Mehta',
        statusClass: 'secondary',
        description: 'Database query optimization and caching implementation.'
    },
    {
        id: 12,
        name: 'User Acceptance Testing',
        dueDate: 'Apr 15, 2024',
        status: 'Not Started',
        completion: 0,
        responsible: 'Dr. Rajesh Kumar',
        statusClass: 'secondary',
        description: 'UAT with end users from coal mining operations.'
    },
    {
        id: 13,
        name: 'Documentation & Training',
        dueDate: 'Apr 25, 2024',
        status: 'Not Started',
        completion: 0,
        responsible: 'Priya Sharma',
        statusClass: 'secondary',
        description: 'User manuals, API documentation, and training materials.'
    },
    {
        id: 14,
        name: 'Production Deployment',
        dueDate: 'Apr 30, 2024',
        status: 'Not Started',
        completion: 0,
        responsible: 'DevOps Team',
        statusClass: 'secondary',
        description: 'Final deployment to production environment with monitoring.'
    }
];

// Progress reports data
const progressReports = [
    {
        period: 'Q4 2023',
        date: 'Jan 15, 2024',
        submittedBy: 'Dr. Rajesh Kumar',
        summary: 'Phase 3 development progressing well. AI model accuracy improved to 89%. Minor delays in integration testing.'
    },
    {
        period: 'Q3 2023',
        date: 'Oct 15, 2023',
        submittedBy: 'Dr. Rajesh Kumar',
        summary: 'Phase 2 completed on schedule. Backend API fully functional. Frontend core features implemented successfully.'
    },
    {
        period: 'Q2 2023',
        date: 'Jul 15, 2023',
        submittedBy: 'Dr. Rajesh Kumar',
        summary: 'Database development completed ahead of schedule. AI model training Phase 1 achieved 85% accuracy target.'
    },
    {
        period: 'Q1 2023',
        date: 'Apr 15, 2023',
        submittedBy: 'Dr. Rajesh Kumar',
        summary: 'Project kickoff successful. Requirements gathering and system design completed. Team fully onboarded.'
    }
];

// Team members data
const teamMembers = [
    {
        name: 'Dr. Rajesh Kumar',
        role: 'Project Lead',
        initials: 'RK',
        email: 'rajesh.kumar@cmpdi.gov.in',
        phone: '+91-9876543210',
        lastActivity: '2 hours ago'
    },
    {
        name: 'Dr. Vikram Singh',
        role: 'AI/ML Engineer',
        initials: 'VS',
        email: 'vikram.singh@cmpdi.gov.in',
        phone: '+91-9876543211',
        lastActivity: '5 hours ago'
    },
    {
        name: 'Amit Patel',
        role: 'System Architect',
        initials: 'AP',
        email: 'amit.patel@cmpdi.gov.in',
        phone: '+91-9876543212',
        lastActivity: '1 day ago'
    },
    {
        name: 'Neha Gupta',
        role: 'Frontend Developer',
        initials: 'NG',
        email: 'neha.gupta@cmpdi.gov.in',
        phone: '+91-9876543213',
        lastActivity: '3 hours ago'
    },
    {
        name: 'Rahul Mehta',
        role: 'Backend Developer',
        initials: 'RM',
        email: 'rahul.mehta@cmpdi.gov.in',
        phone: '+91-9876543214',
        lastActivity: '4 hours ago'
    },
    {
        name: 'Priya Sharma',
        role: 'Database Administrator',
        initials: 'PS',
        email: 'priya.sharma@cmpdi.gov.in',
        phone: '+91-9876543215',
        lastActivity: '6 hours ago'
    }
];

// Documents data
const documentsData = {
    documents: [
        { name: 'Project Charter.pdf', type: 'PDF', size: '2.4 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Jan 15, 2023' },
        { name: 'Requirements Specification.docx', type: 'DOCX', size: '1.8 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Feb 10, 2023' },
        { name: 'System Architecture Diagram.pdf', type: 'PDF', size: '3.2 MB', uploadedBy: 'Amit Patel', date: 'Mar 25, 2023' },
        { name: 'Database Schema.pdf', type: 'PDF', size: '1.5 MB', uploadedBy: 'Priya Sharma', date: 'Apr 20, 2023' },
        { name: 'API Documentation.pdf', type: 'PDF', size: '4.1 MB', uploadedBy: 'Rahul Mehta', date: 'Oct 15, 2023' }
    ],
    deliverables: [
        { name: 'AI Model v1.0', type: 'Model', size: '156 MB', uploadedBy: 'Dr. Vikram Singh', date: 'Jul 30, 2023' },
        { name: 'Frontend Build v2.1', type: 'ZIP', size: '45 MB', uploadedBy: 'Neha Gupta', date: 'Sep 15, 2023' },
        { name: 'Backend API v1.5', type: 'ZIP', size: '28 MB', uploadedBy: 'Rahul Mehta', date: 'Oct 30, 2023' },
        { name: 'Database Backup', type: 'SQL', size: '892 MB', uploadedBy: 'Priya Sharma', date: 'Dec 01, 2023' },
        { name: 'Test Results Report.pdf', type: 'PDF', size: '5.6 MB', uploadedBy: 'Amit Patel', date: 'Jan 20, 2024' }
    ],
    reports: [
        { name: 'Q4 2023 Progress Report.pdf', type: 'PDF', size: '2.1 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Jan 15, 2024' },
        { name: 'Q3 2023 Progress Report.pdf', type: 'PDF', size: '1.9 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Oct 15, 2023' },
        { name: 'Q2 2023 Progress Report.pdf', type: 'PDF', size: '1.7 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Jul 15, 2023' },
        { name: 'Q1 2023 Progress Report.pdf', type: 'PDF', size: '1.5 MB', uploadedBy: 'Dr. Rajesh Kumar', date: 'Apr 15, 2023' }
    ]
};

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    renderTimeline();
    renderMilestonesTable();
    renderProgressReports();
    renderTeamMembers();
    renderDocuments('documents');

    // Project selector change handler
    document.getElementById('projectSelect').addEventListener('change', function () {
        // In a real app, this would load different project data
        console.log('Project changed to:', this.value);
    });
});

// Render timeline visualization
function renderTimeline() {
    const timeline = document.getElementById('projectTimeline');

    let html = '<div class="timeline-track">';
    html += '<div class="timeline-line"></div>';

    timelineMilestones.forEach((milestone, index) => {
        let dotClass = 'timeline-dot';
        if (milestone.status === 'completed') dotClass += ' completed';
        if (milestone.status === 'current') dotClass += ' current';
        if (milestone.status === 'overdue') dotClass += ' overdue';

        html += `
            <div class="timeline-milestone">
                <div class="${dotClass}">
                    ${milestone.status === 'completed' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
                </div>
                <div class="timeline-label">${milestone.name}</div>
                <div class="timeline-date">${milestone.date}</div>
                ${milestone.status === 'current' ? '<span class="badge badge-info" style="margin-top: 4px; font-size: 10px;">In Progress</span>' : ''}
            </div>
        `;
    });

    html += '</div>';
    timeline.innerHTML = html;
}

// Render milestones table
function renderMilestonesTable() {
    const tbody = document.getElementById('milestonesTableBody');

    let html = '';
    detailedMilestones.forEach(milestone => {
        const badgeClass = `badge-${milestone.statusClass}`;

        html += `
            <tr class="milestone-row" data-milestone-id="${milestone.id}">
                <td>
                    <button class="btn-icon" onclick="toggleMilestoneDetails(${milestone.id})">
                        <svg class="expand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </td>
                <td><strong>${milestone.name}</strong></td>
                <td>${milestone.dueDate}</td>
                <td><span class="badge ${badgeClass}">${milestone.status}</span></td>
                <td>
                    <div class="progress" style="width: 100px;">
                        <div class="progress-bar" style="width: ${milestone.completion}%;"></div>
                    </div>
                    <span class="text-sm text-secondary">${milestone.completion}%</span>
                </td>
                <td>${milestone.responsible}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-secondary">View</button>
                </td>
            </tr>
            <tr class="milestone-details" id="milestone-details-${milestone.id}" style="display: none;">
                <td colspan="7" style="background-color: var(--color-bg-secondary); padding: var(--spacing-md);">
                    <div style="padding-left: 24px;">
                        <strong>Description:</strong>
                        <p style="margin-top: 8px; color: var(--color-text-secondary);">${milestone.description}</p>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

// Toggle milestone details
function toggleMilestoneDetails(milestoneId) {
    const detailsRow = document.getElementById(`milestone-details-${milestoneId}`);
    const isVisible = detailsRow.style.display !== 'none';

    detailsRow.style.display = isVisible ? 'none' : 'table-row';
}

// Render progress reports
function renderProgressReports() {
    const container = document.getElementById('progressReports');

    let html = '';
    progressReports.forEach(report => {
        html += `
            <div class="report-item">
                <div class="report-header">
                    <div class="report-period">${report.period}</div>
                    <div>
                        <button class="btn btn-sm btn-secondary" style="margin-right: 4px;">View</button>
                        <button class="btn btn-sm btn-secondary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="report-meta">Submitted on ${report.date} by ${report.submittedBy}</div>
                <div class="report-summary">${report.summary}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render team members
function renderTeamMembers() {
    const container = document.getElementById('projectTeam');

    let html = '';
    teamMembers.forEach(member => {
        html += `
            <div class="team-member">
                <div class="team-avatar">${member.initials}</div>
                <div class="team-info">
                    <div class="team-name">${member.name}</div>
                    <div class="team-role">${member.role}</div>
                    <div class="team-contact">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle;">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        ${member.email} • Last active: ${member.lastActivity}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Switch document tabs
function switchDocTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // Render documents for the selected tab
    renderDocuments(tabName);
}

// Render documents list
function renderDocuments(type) {
    const container = document.getElementById(`${type}List`);
    const docs = documentsData[type];

    if (!docs || docs.length === 0) {
        container.innerHTML = '<p class="text-secondary">No documents available.</p>';
        return;
    }

    let html = '<div class="table-wrapper"><table class="table"><thead><tr>';
    html += '<th>File Name</th><th>Type</th><th>Size</th><th>Uploaded By</th><th>Date</th><th class="text-right">Actions</th>';
    html += '</tr></thead><tbody>';

    docs.forEach(doc => {
        html += `
            <tr>
                <td>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 8px;">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <strong>${doc.name}</strong>
                </td>
                <td><span class="badge badge-secondary">${doc.type}</span></td>
                <td>${doc.size}</td>
                <td>${doc.uploadedBy}</td>
                <td>${doc.date}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-secondary" style="margin-right: 4px;">Preview</button>
                    <button class="btn btn-sm btn-primary">Download</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}
