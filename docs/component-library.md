# NaCCER AI Platform - Component Library Documentation

**Government of India - Ministry of Coal (CMPDI)**

This document provides comprehensive documentation for all reusable UI components in the NaCCER AI Platform.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Forms](#forms)
3. [Cards](#cards)
4. [Tables](#tables)
5. [Alerts](#alerts)
6. [Badges](#badges)
7. [Modals](#modals)
8. [Navigation](#navigation)
9. [Loading States](#loading-states)
10. [Color Palette](#color-palette)
11. [Typography](#typography)

---

## Buttons

### Primary Button
**Usage:** Main actions like submit, save, confirm

```html
<button class="btn btn-primary">Submit Proposal</button>
```

**Variants:**
- `btn-primary` - Blue background, white text
- `btn-secondary` - White background, blue border
- `btn-tertiary` - Transparent background, blue text

**Sizes:**
- `btn-sm` - Small (32px height)
- Default - Medium (40px height)
- `btn-lg` - Large (48px height)

**Modifiers:**
- `btn-block` - Full width button

### Example with Icon

```html
<button class="btn btn-primary">
    <svg class="btn-icon" width="20" height="20">...</svg>
    Submit
</button>
```

---

## Forms

### Text Input

```html
<div class="form-group">
    <label for="email" class="form-label form-label-required">Email</label>
    <input type="email" id="email" class="form-input" placeholder="Enter email" />
    <span class="form-helper">We'll never share your email</span>
</div>
```

### States
- `form-input-error` - Error state (red border)
- `form-input-success` - Success state (green border)

### Textarea

```html
<textarea class="form-textarea" rows="4" placeholder="Enter description"></textarea>
```

### Select Dropdown

```html
<select class="form-select">
    <option>Select option</option>
    <option>Option 1</option>
</select>
```

### Checkbox

```html
<label class="form-checkbox">
    <input type="checkbox" />
    <span>Remember me</span>
</label>
```

---

## Cards

### Standard Card

```html
<div class="card">
    <div class="card-header">
        <h4>Card Title</h4>
    </div>
    <div class="card-body">
        Card content goes here
    </div>
    <div class="card-footer">
        Footer content
    </div>
</div>
```

### Stat Card (KPI)

```html
<div class="stat-card">
    <div class="stat-icon">📊</div>
    <div class="stat-content">
        <div class="stat-value">1,247</div>
        <div class="stat-label">Total Proposals</div>
    </div>
</div>
```

---

## Tables

### Standard Table

```html
<table class="table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th class="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td class="text-right">
                <button class="btn btn-sm btn-tertiary">View</button>
            </td>
        </tr>
    </tbody>
</table>
```

**Features:**
- Alternating row colors
- Hover effects
- Selected state with `table-row-selected`

---

## Alerts

### Alert Types

```html
<!-- Success Alert -->
<div class="alert alert-success">
    <div class="alert-content">Success message</div>
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
    <div class="alert-content">Warning message</div>
</div>

<!-- Error Alert -->
<div class="alert alert-error">
    <div class="alert-content">Error message</div>
</div>

<!-- Info Alert -->
<div class="alert alert-info">
    <div class="alert-content">Info message</div>
</div>
```

---

## Badges

### Status Badges

```html
<span class="badge badge-success">Approved</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Rejected</span>
<span class="badge badge-info">In Review</span>
<span class="badge badge-neutral">Draft</span>
```

---

## Modals

### Modal Structure

```html
<div class="modal-overlay">
    <div class="modal">
        <div class="modal-header">
            <h3>Modal Title</h3>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            Modal content
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary">Cancel</button>
            <button class="btn btn-primary">Confirm</button>
        </div>
    </div>
</div>
```

**Sizes:**
- `modal-sm` - Small (400px)
- Default - Medium (600px)
- `modal-lg` - Large (800px)

---

## Navigation

### Top Navigation Bar

```html
<nav class="navbar">
    <div class="navbar-brand">
        <img src="logo.png" class="navbar-logo" alt="Logo" />
        <span>NaCCER AI Platform</span>
    </div>
    
    <ul class="navbar-menu">
        <li><a href="#" class="active">Dashboard</a></li>
        <li><a href="#">Proposals</a></li>
    </ul>
    
    <div class="navbar-user">
        <div class="navbar-avatar">DR</div>
        <span>Dr. Rajesh Kumar</span>
    </div>
</nav>
```

### Breadcrumbs

```html
<nav class="breadcrumb">
    <a href="#">Home</a>
    <span class="breadcrumb-separator">/</span>
    <a href="#">Proposals</a>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-current">Details</span>
</nav>
```

---

## Loading States

### Spinner

```html
<div class="spinner"></div>
<div class="spinner spinner-sm"></div>
```

### Progress Bar

```html
<div class="progress">
    <div class="progress-bar" style="width: 60%"></div>
</div>
```

### Skeleton Loader

```html
<div class="skeleton skeleton-title"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-card"></div>
```

---

## Color Palette

### Primary Colors
- **Deep Navy Blue:** `#1E3A8A` - Headers, authority
- **Official Blue:** `#2563EB` - Primary actions, links
- **White:** `#FFFFFF` - Main background
- **Light Gray:** `#F3F4F6` - Secondary background

### Status Colors
- **Success Green:** `#059669` - Approvals, success
- **Warning Amber:** `#D97706` - Warnings, pending
- **Error Red:** `#DC2626` - Errors, rejections
- **Info Blue:** `#0284C7` - Information

### Text Colors
- **Primary Text:** `#1F2937`
- **Secondary Text:** `#6B7280`
- **Tertiary Text:** `#9CA3AF`

---

## Typography

### Headings

```html
<h1>Page Title (32px, Bold)</h1>
<h2>Section Header (24px, Semi-Bold)</h2>
<h3>Subsection (20px, Semi-Bold)</h3>
<h4>Card Title (18px, Medium)</h4>
```

### Body Text

```html
<p>Body text (16px, Regular)</p>
<small>Small text (14px, Regular)</small>
```

### Font Weights
- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700

---

## Spacing System

Based on 8px increments:

- `--spacing-xs`: 8px
- `--spacing-sm`: 16px
- `--spacing-md`: 24px
- `--spacing-lg`: 32px
- `--spacing-xl`: 48px
- `--spacing-xxl`: 64px

### Utility Classes

```html
<div class="mt-md mb-lg p-md">Content</div>
```

---

## Grid System

### Grid Layouts

```html
<div class="grid grid-cols-3 gap-md">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

**Grid Classes:**
- `grid-cols-2` - 2 columns
- `grid-cols-3` - 3 columns
- `grid-cols-4` - 4 columns

---

## Best Practices

### DO ✅
- Use conservative, professional design
- Maintain high contrast (WCAG AA)
- Use consistent spacing (8px system)
- Keep border-radius ≤ 8px
- Use semantic HTML
- Add ARIA labels for accessibility

### DON'T ❌
- Use gradients or abstract shapes
- Use bright neon colors
- Use font sizes below 12px
- Use multiple accent colors
- Use decorative fonts
- Use heavy shadows or elevation

---

## Accessibility

All components follow WCAG 2.1 AA standards:

- **Color Contrast:** Minimum 4.5:1 for text
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Focus Indicators:** Visible focus states
- **ARIA Labels:** Proper labeling for screen readers
- **Alt Text:** For all images and icons

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

**Last Updated:** February 9, 2024  
**Version:** 1.0.0
