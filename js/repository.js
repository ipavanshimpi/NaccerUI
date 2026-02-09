// Repository JavaScript
// Handles search, filtering, view switching, and document preview

// Sample documents data (20 documents)
const documents = [
    {
        id: 1,
        title: 'AI-Based Coal Quality Assessment Using Machine Learning',
        author: 'Dr. Rajesh Kumar',
        organization: 'IIT Delhi',
        date: '2024-01-15',
        type: 'Research Paper',
        category: 'AI & Automation',
        tags: ['Machine Learning', 'Coal Quality', 'Computer Vision'],
        size: '2.4 MB',
        downloads: 342,
        abstract: 'This paper presents a novel approach to coal quality assessment using deep learning techniques...'
    },
    {
        id: 2,
        title: 'Automated Mine Safety Monitoring System',
        author: 'Prof. Anita Sharma',
        organization: 'CMPDI',
        date: '2023-12-10',
        type: 'Technical Report',
        category: 'Safety & Health',
        tags: ['Safety Systems', 'IoT Sensors', 'Real-time Monitoring'],
        size: '3.8 MB',
        downloads: 289,
        abstract: 'Comprehensive technical report on implementing automated safety monitoring in underground mines...'
    },
    {
        id: 3,
        title: 'Methane Detection Using IoT Sensors',
        author: 'Dr. Vikram Singh',
        organization: 'NIT Rourkela',
        date: '2023-11-25',
        type: 'Research Proposal',
        category: 'Safety & Health',
        tags: ['Methane Detection', 'IoT Sensors', 'Safety Systems'],
        size: '1.9 MB',
        downloads: 256,
        abstract: 'Proposal for developing advanced methane detection system using distributed IoT sensor network...'
    },
    {
        id: 4,
        title: 'Renewable Energy Integration in Mining Operations',
        author: 'Dr. Priya Patel',
        organization: 'IIT Kharagpur',
        date: '2023-10-18',
        type: 'White Paper',
        category: 'Energy Efficiency',
        tags: ['Renewable Energy', 'Solar Power', 'Sustainability'],
        size: '2.7 MB',
        downloads: 198,
        abstract: 'Analysis of renewable energy integration strategies for coal mining operations...'
    },
    {
        id: 5,
        title: 'Underground Operations Optimization Framework',
        author: 'Amit Patel',
        organization: 'CMPDI',
        date: '2023-09-30',
        type: 'Technical Report',
        category: 'Coal Mining Technology',
        tags: ['Underground Mining', 'Optimization', 'Efficiency'],
        size: '4.2 MB',
        downloads: 234,
        abstract: 'Framework for optimizing underground coal mining operations using data analytics...'
    },
    {
        id: 6,
        title: 'Environmental Impact Assessment of Surface Mining',
        author: 'Dr. Neha Gupta',
        organization: 'TERI',
        date: '2023-08-22',
        type: 'Case Study',
        category: 'Environmental Sustainability',
        tags: ['Environmental Impact', 'Surface Mining', 'Sustainability'],
        size: '5.1 MB',
        downloads: 167,
        abstract: 'Detailed case study on environmental impact assessment methodologies for surface mining...'
    },
    {
        id: 7,
        title: 'Coal Seam Analysis Using Geophysical Methods',
        author: 'Dr. Rahul Mehta',
        organization: 'ISM Dhanbad',
        date: '2023-07-15',
        type: 'Research Paper',
        category: 'Coal Mining Technology',
        tags: ['Coal Seam Analysis', 'Geophysics', 'Exploration'],
        size: '3.3 MB',
        downloads: 145,
        abstract: 'Advanced geophysical methods for accurate coal seam characterization and analysis...'
    },
    {
        id: 8,
        title: 'Predictive Maintenance in Mining Equipment',
        author: 'Prof. Sanjay Kumar',
        organization: 'CMPDI',
        date: '2023-06-28',
        type: 'Presentation',
        category: 'AI & Automation',
        tags: ['Predictive Maintenance', 'Machine Learning', 'Equipment'],
        size: '12.5 MB',
        downloads: 312,
        abstract: 'Presentation on implementing predictive maintenance using AI and IoT sensors...'
    },
    {
        id: 9,
        title: 'Water Management in Coal Mining',
        author: 'Dr. Kavita Sharma',
        organization: 'NIT Raipur',
        date: '2023-05-12',
        type: 'Technical Report',
        category: 'Environmental Sustainability',
        tags: ['Water Management', 'Sustainability', 'Resource Conservation'],
        size: '2.8 MB',
        downloads: 178,
        abstract: 'Comprehensive study on water management practices in coal mining operations...'
    },
    {
        id: 10,
        title: 'Digital Twin Technology for Mining Operations',
        author: 'Dr. Arun Mehta',
        organization: 'IIT Bombay',
        date: '2023-04-20',
        type: 'Research Proposal',
        category: 'AI & Automation',
        tags: ['Digital Twin', 'Simulation', 'Optimization'],
        size: '2.1 MB',
        downloads: 267,
        abstract: 'Proposal for implementing digital twin technology to optimize mining operations...'
    },
    {
        id: 11,
        title: 'Ventilation System Optimization',
        author: 'Prof. Deepak Singh',
        organization: 'CMPDI',
        date: '2023-03-15',
        type: 'Technical Report',
        category: 'Safety & Health',
        tags: ['Ventilation', 'Air Quality', 'Safety Systems'],
        size: '3.6 MB',
        downloads: 201,
        abstract: 'Technical analysis of ventilation system optimization in underground coal mines...'
    },
    {
        id: 12,
        title: 'Autonomous Haulage Systems',
        author: 'Dr. Ravi Kumar',
        organization: 'IIT Madras',
        date: '2023-02-28',
        type: 'White Paper',
        category: 'AI & Automation',
        tags: ['Autonomous Vehicles', 'Automation', 'Efficiency'],
        size: '4.7 MB',
        downloads: 289,
        abstract: 'Analysis of autonomous haulage systems implementation in open-cast mining...'
    },
    {
        id: 13,
        title: 'Slope Stability Analysis Using AI',
        author: 'Dr. Meera Patel',
        organization: 'NIT Trichy',
        date: '2023-01-18',
        type: 'Research Paper',
        category: 'Safety & Health',
        tags: ['Slope Stability', 'Machine Learning', 'Safety'],
        size: '2.9 MB',
        downloads: 156,
        abstract: 'AI-based approach for real-time slope stability monitoring and prediction...'
    },
    {
        id: 14,
        title: 'Dust Suppression Technologies',
        author: 'Amit Verma',
        organization: 'CMPDI',
        date: '2022-12-10',
        type: 'Case Study',
        category: 'Environmental Sustainability',
        tags: ['Dust Control', 'Air Quality', 'Health'],
        size: '1.8 MB',
        downloads: 134,
        abstract: 'Case study on effective dust suppression technologies in coal mining...'
    },
    {
        id: 15,
        title: 'Blasting Optimization Using Data Analytics',
        author: 'Dr. Suresh Reddy',
        organization: 'ISM Dhanbad',
        date: '2022-11-22',
        type: 'Research Paper',
        category: 'Coal Mining Technology',
        tags: ['Blasting', 'Optimization', 'Data Analytics'],
        size: '3.1 MB',
        downloads: 187,
        abstract: 'Data-driven approach to optimize blasting parameters in surface coal mining...'
    },
    {
        id: 16,
        title: 'Mine Reclamation Best Practices',
        author: 'Dr. Pooja Sharma',
        organization: 'TERI',
        date: '2022-10-15',
        type: 'White Paper',
        category: 'Environmental Sustainability',
        tags: ['Reclamation', 'Restoration', 'Sustainability'],
        size: '5.4 MB',
        downloads: 223,
        abstract: 'Comprehensive guide on mine reclamation and land restoration best practices...'
    },
    {
        id: 17,
        title: 'Real-time Production Monitoring Dashboard',
        author: 'Rajesh Gupta',
        organization: 'CMPDI',
        date: '2022-09-08',
        type: 'Presentation',
        category: 'AI & Automation',
        tags: ['Dashboard', 'Monitoring', 'Real-time Data'],
        size: '18.2 MB',
        downloads: 298,
        abstract: 'Presentation on implementing real-time production monitoring dashboards...'
    },
    {
        id: 18,
        title: 'Coal Beneficiation Process Optimization',
        author: 'Dr. Anand Kumar',
        organization: 'IIT Delhi',
        date: '2022-08-20',
        type: 'Technical Report',
        category: 'Coal Mining Technology',
        tags: ['Beneficiation', 'Processing', 'Quality Improvement'],
        size: '4.5 MB',
        downloads: 176,
        abstract: 'Technical report on optimizing coal beneficiation processes for quality improvement...'
    },
    {
        id: 19,
        title: 'Worker Safety Training Program',
        author: 'Prof. Sunita Rao',
        organization: 'CMPDI',
        date: '2022-07-12',
        type: 'Case Study',
        category: 'Safety & Health',
        tags: ['Training', 'Safety Culture', 'Best Practices'],
        size: '2.3 MB',
        downloads: 245,
        abstract: 'Case study on implementing comprehensive worker safety training programs...'
    },
    {
        id: 20,
        title: 'Energy Efficiency in Coal Processing',
        author: 'Dr. Manoj Singh',
        organization: 'NIT Rourkela',
        date: '2022-06-25',
        type: 'Research Proposal',
        category: 'Energy Efficiency',
        tags: ['Energy Efficiency', 'Processing', 'Cost Reduction'],
        size: '2.6 MB',
        downloads: 189,
        abstract: 'Proposal for improving energy efficiency in coal processing operations...'
    }
];

// State management
let currentView = 'grid';
let currentPage = 1;
let perPage = 12;
let filteredDocuments = [...documents];
let activeFilters = {
    search: '',
    docTypes: [],
    year: '',
    categories: [],
    tags: []
};

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    renderDocuments();
    updatePagination();
    updateResultsCount();

    // Search input handler
    document.getElementById('repositorySearch').addEventListener('input', function (e) {
        activeFilters.search = e.target.value.toLowerCase();
        applyFilters();
    });
});

// Switch between grid and list view
function switchView(view) {
    currentView = view;

    // Update button states
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${view}"]`).classList.add('active');

    // Toggle views
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');

    if (view === 'grid') {
        gridView.style.display = 'grid';
        listView.style.display = 'none';
    } else {
        gridView.style.display = 'none';
        listView.style.display = 'block';
    }

    renderDocuments();
}

// Apply all filters
function applyFilters() {
    // Get selected document types
    activeFilters.docTypes = Array.from(document.querySelectorAll('input[name="docType"]:checked'))
        .map(cb => cb.value);

    // Get selected year
    activeFilters.year = document.getElementById('yearFilter').value;

    // Get selected categories
    activeFilters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);

    // Filter documents
    filteredDocuments = documents.filter(doc => {
        // Search filter
        if (activeFilters.search) {
            const searchMatch = doc.title.toLowerCase().includes(activeFilters.search) ||
                doc.author.toLowerCase().includes(activeFilters.search) ||
                doc.tags.some(tag => tag.toLowerCase().includes(activeFilters.search));
            if (!searchMatch) return false;
        }

        // Document type filter
        if (activeFilters.docTypes.length > 0) {
            const typeMap = {
                'proposals': 'Research Proposal',
                'reports': 'Technical Report',
                'papers': 'Research Paper',
                'presentations': 'Presentation',
                'case-studies': 'Case Study',
                'white-papers': 'White Paper'
            };
            const matchedType = activeFilters.docTypes.some(type => typeMap[type] === doc.type);
            if (!matchedType) return false;
        }

        // Year filter
        if (activeFilters.year) {
            if (!doc.date.startsWith(activeFilters.year)) return false;
        }

        // Category filter
        if (activeFilters.categories.length > 0) {
            const categoryMap = {
                'coal-mining': 'Coal Mining Technology',
                'safety': 'Safety & Health',
                'environment': 'Environmental Sustainability',
                'ai': 'AI & Automation',
                'energy': 'Energy Efficiency'
            };
            const matchedCategory = activeFilters.categories.some(cat => categoryMap[cat] === doc.category);
            if (!matchedCategory) return false;
        }

        // Tag filter
        if (activeFilters.tags.length > 0) {
            const matchedTag = activeFilters.tags.some(tag =>
                doc.tags.some(docTag => docTag.toLowerCase().includes(tag.toLowerCase()))
            );
            if (!matchedTag) return false;
        }

        return true;
    });

    currentPage = 1;
    renderDocuments();
    updatePagination();
    updateResultsCount();
    updateActiveFilters();
}

// Clear all filters
function clearAllFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

    // Reset year filter
    document.getElementById('yearFilter').value = '';

    // Clear search
    document.getElementById('repositorySearch').value = '';

    // Reset active filters
    activeFilters = {
        search: '',
        docTypes: [],
        year: '',
        categories: [],
        tags: []
    };

    applyFilters();
}

// Filter by tag
function filterByTag(tag) {
    if (!activeFilters.tags.includes(tag)) {
        activeFilters.tags.push(tag);
    }
    applyFilters();
}

// Update active filters display
function updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    let html = '';

    const filterCount = activeFilters.docTypes.length +
        (activeFilters.year ? 1 : 0) +
        activeFilters.categories.length +
        activeFilters.tags.length;

    if (filterCount > 0) {
        html = `<span class="filter-badge">${filterCount} filters active</span>`;
    }

    container.innerHTML = html;
}

// Render documents
function renderDocuments() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const paginatedDocs = filteredDocuments.slice(start, end);

    if (currentView === 'grid') {
        renderGridView(paginatedDocs);
    } else {
        renderListView(paginatedDocs);
    }
}

// Render grid view
function renderGridView(docs) {
    const container = document.getElementById('gridView');

    if (docs.length === 0) {
        container.innerHTML = '<p class="text-secondary" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">No documents found matching your criteria.</p>';
        return;
    }

    let html = '';
    docs.forEach(doc => {
        html += `
            <div class="document-card" onclick="openDocumentModal(${doc.id})">
                <div class="doc-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                </div>
                <div class="doc-title">${doc.title}</div>
                <div class="doc-meta">${doc.author} • ${doc.organization}</div>
                <div class="doc-meta">${formatDate(doc.date)}</div>
                <span class="badge badge-secondary" style="width: fit-content; margin-top: 8px;">${doc.type}</span>
                <div class="doc-tags">
                    ${doc.tags.slice(0, 3).map(tag => `<span class="doc-tag">${tag}</span>`).join('')}
                </div>
                <div class="doc-footer">
                    <div class="doc-downloads">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        ${doc.downloads}
                    </div>
                    <div class="doc-size">${doc.size}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render list view
function renderListView(docs) {
    const container = document.getElementById('listView');

    if (docs.length === 0) {
        container.innerHTML = '<p class="text-secondary" style="text-align: center; padding: var(--spacing-xl);">No documents found matching your criteria.</p>';
        return;
    }

    let html = '<div class="table-wrapper"><table class="table"><thead><tr>';
    html += '<th>Title</th><th>Author</th><th>Type</th><th>Category</th><th>Date</th><th>Downloads</th><th>Size</th><th class="text-right">Actions</th>';
    html += '</tr></thead><tbody>';

    docs.forEach(doc => {
        html += `
            <tr onclick="openDocumentModal(${doc.id})" style="cursor: pointer;">
                <td>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 8px;">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <strong>${doc.title}</strong>
                </td>
                <td>${doc.author}</td>
                <td><span class="badge badge-secondary">${doc.type}</span></td>
                <td>${doc.category}</td>
                <td>${formatDate(doc.date)}</td>
                <td>${doc.downloads}</td>
                <td>${doc.size}</td>
                <td class="text-right">
                    <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); openDocumentModal(${doc.id})">View</button>
                    <button class="btn btn-sm btn-primary" onclick="event.stopPropagation();">Download</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredDocuments.length / perPage);
    const container = document.getElementById('pagination');

    let html = '';

    // Previous button
    html += `<button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
    }

    // Next button
    html += `<button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;

    container.innerHTML = html;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredDocuments.length / perPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderDocuments();
    updatePagination();
    updateResultsCount();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Change per page
function changePerPage() {
    perPage = parseInt(document.getElementById('perPage').value);
    currentPage = 1;
    renderDocuments();
    updatePagination();
    updateResultsCount();
}

// Update results count
function updateResultsCount() {
    const start = (currentPage - 1) * perPage + 1;
    const end = Math.min(start + perPage - 1, filteredDocuments.length);
    const total = filteredDocuments.length;

    document.getElementById('resultsCount').textContent = `Showing ${start}-${end} of ${total} documents`;
}

// Sort documents
function sortDocuments() {
    const sortBy = document.getElementById('sortBy').value;

    switch (sortBy) {
        case 'date-newest':
            filteredDocuments.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-oldest':
            filteredDocuments.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'downloads':
            filteredDocuments.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'title':
            filteredDocuments.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default: // relevance
            filteredDocuments = [...documents].filter(doc =>
                filteredDocuments.some(fd => fd.id === doc.id)
            );
    }

    currentPage = 1;
    renderDocuments();
    updatePagination();
}

// Open document modal
function openDocumentModal(docId) {
    const doc = documents.find(d => d.id === docId);
    if (!doc) return;

    document.getElementById('modalDocTitle').textContent = doc.title;

    const metadata = document.getElementById('documentMetadata');
    metadata.innerHTML = `
        <div class="metadata-section">
            <h4 style="font-size: 18px; margin-bottom: var(--spacing-sm);">${doc.title}</h4>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Author(s)</div>
            <div class="metadata-value">${doc.author}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Organization</div>
            <div class="metadata-value">${doc.organization}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Publication Date</div>
            <div class="metadata-value">${formatDate(doc.date)}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Document Type</div>
            <div class="metadata-value"><span class="badge badge-secondary">${doc.type}</span></div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Category</div>
            <div class="metadata-value">${doc.category}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">File Size</div>
            <div class="metadata-value">${doc.size}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Downloads</div>
            <div class="metadata-value">${doc.downloads} times</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Abstract</div>
            <div class="metadata-value" style="line-height: 1.6;">${doc.abstract}</div>
        </div>
        
        <div class="metadata-section">
            <div class="metadata-title">Keywords/Tags</div>
            <div class="doc-tags">
                ${doc.tags.map(tag => `<span class="doc-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="metadata-section">
            <button class="btn btn-primary btn-block">Download</button>
            <button class="btn btn-secondary btn-block" style="margin-top: 8px;">Share</button>
            <button class="btn btn-secondary btn-block" style="margin-top: 8px;">Bookmark</button>
        </div>
    `;

    document.getElementById('documentModal').style.display = 'flex';
}

// Close document modal
function closeDocumentModal() {
    document.getElementById('documentModal').style.display = 'none';
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}
