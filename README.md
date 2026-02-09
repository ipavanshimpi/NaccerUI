# NaCCER AI Platform - Setup Instructions

**National Centre for Coal and Energy Research (NaCCER), CMPDI**  
**Ministry of Coal, Government of India**

---

## Quick Start

### 1. File Structure

Your project is organized as follows:

```
/Users/pavanshimpi/Desktop/NaCCer UI/
├── index.html                  # Login page (entry point)
├── dashboard.html              # Main dashboard
├── css/
│   ├── main.css               # Base styles & design tokens
│   ├── components.css         # Reusable UI components
│   └── responsive.css         # Mobile/tablet/desktop styles
├── js/
│   ├── forms.js              # Form validation & handling
│   └── dashboard.js          # Dashboard functionality
└── docs/
    └── component-library.md  # Component documentation
```

---

## 2. Opening the Application

### Option A: Direct File Access
Simply open the HTML files in your browser:

1. **Login Page:** Double-click `index.html`
2. **Dashboard:** Double-click `dashboard.html`

### Option B: Local Server (Recommended for Development)

```bash
# Navigate to project directory
cd "/Users/pavanshimpi/Desktop/NaCCer UI"

# Start a simple HTTP server
# Python 3:
python3 -m http.server 8000

# Python 2:
python -m SimpleHTTPServer 8000

# Node.js (if you have npx):
npx http-server -p 8000
```

Then open: `http://localhost:8000`

---

## 3. Dependencies

### External Dependencies
- **Chart.js** (v4.4.0) - Loaded via CDN in `dashboard.html`
- **Google Fonts** - Inter font loaded via CDN

### No Installation Required
All CSS and JavaScript are self-contained. No build process needed.

---

## 4. Browser Compatibility

Tested and supported on:
- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)

**Minimum Requirements:**
- Modern browser with ES6 support
- JavaScript enabled
- CSS Grid and Flexbox support

---

## 5. Using the Component Library

All components are documented in [`docs/component-library.md`](docs/component-library.md).

### Example: Adding a Button

```html
<!-- Primary Button -->
<button class="btn btn-primary">Submit</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Cancel</button>

<!-- Button with Icon -->
<button class="btn btn-primary">
    <svg class="btn-icon" width="20" height="20">...</svg>
    Submit
</button>
```

### Example: Creating a Card

```html
<div class="card">
    <div class="card-header">
        <h4>Card Title</h4>
    </div>
    <div class="card-body">
        Your content here
    </div>
</div>
```

### Example: Form with Validation

```html
<div class="form-group">
    <label for="email" class="form-label form-label-required">Email</label>
    <input type="email" id="email" class="form-input" required />
    <span class="form-error" id="emailError"></span>
</div>
```

---

## 6. Customization

### Changing Colors

Edit CSS custom properties in `css/main.css`:

```css
:root {
    --color-primary-blue: #2563EB;    /* Change primary color */
    --color-primary-navy: #1E3A8A;    /* Change navy color */
    /* ... other colors ... */
}
```

### Changing Fonts

Update the Google Fonts import in HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update in `css/main.css`:

```css
body {
    font-family: 'YourFont', -apple-system, sans-serif;
}
```

### Changing Spacing

Modify spacing variables in `css/main.css`:

```css
:root {
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    /* ... etc ... */
}
```

---

## 7. Adding New Pages

### Step 1: Create HTML File
Copy `dashboard.html` as a template:

```bash
cp dashboard.html new-page.html
```

### Step 2: Update Content
Replace the main content while keeping the navigation and structure.

### Step 3: Link Stylesheets
Ensure these are in the `<head>`:

```html
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/responsive.css">
```

### Step 4: Add Navigation Link
Update the navbar in all pages:

```html
<ul class="navbar-menu">
    <li><a href="dashboard.html">Dashboard</a></li>
    <li><a href="new-page.html" class="active">New Page</a></li>
    <!-- ... -->
</ul>
```

---

## 8. Form Validation

The `js/forms.js` provides a `FormValidator` object:

```javascript
// Validate email
FormValidator.isValidEmail('test@example.com'); // true/false

// Show error
FormValidator.showError('inputId', 'Error message');

// Clear error
FormValidator.clearError('inputId');

// Clear all errors in form
FormValidator.clearAllErrors('formId');
```

---

## 9. Chart.js Integration

Dashboard uses Chart.js for visualizations. To add more charts:

```javascript
const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
    type: 'bar', // or 'line', 'pie', 'doughnut'
    data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [{
            label: 'Dataset',
            data: [12, 19],
            backgroundColor: ['#2563EB', '#059669']
        }]
    },
    options: {
        responsive: true,
        // ... options ...
    }
});
```

See [`js/dashboard.js`](js/dashboard.js) for a complete example.

---

## 10. Accessibility Testing

### Keyboard Navigation Test
1. Press `Tab` to navigate through interactive elements
2. Press `Enter` or `Space` to activate buttons
3. Press `Esc` to close modals

### Screen Reader Test
- Use NVDA (Windows) or VoiceOver (Mac)
- All form fields should be announced with labels
- All buttons should have descriptive text

### Color Contrast Test
- Use browser DevTools or online tools
- All text should meet WCAG AA (4.5:1 minimum)

---

## 11. Responsive Testing

### Browser DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test on different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

### Physical Devices
Test on actual mobile devices and tablets for touch interactions.

---

## 12. Performance Optimization

### For Production

1. **Minify CSS:**
```bash
# Using online tools or build tools
# Combine and minify main.css, components.css, responsive.css
```

2. **Minify JavaScript:**
```bash
# Minify forms.js and dashboard.js
```

3. **Optimize Images:**
- Use WebP format for images
- Compress to appropriate sizes
- Use lazy loading for images below the fold

4. **Enable Caching:**
- Set appropriate cache headers on your server
- Use versioned filenames (e.g., `main.v1.css`)

---

## 13. Troubleshooting

### Chart.js Not Loading
- Check internet connection (CDN dependency)
- Verify Chart.js CDN URL is accessible
- Check browser console for errors

### Styles Not Applying
- Verify CSS file paths are correct
- Check for typos in class names
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Form Validation Not Working
- Ensure `js/forms.js` is loaded
- Check browser console for JavaScript errors
- Verify form IDs match JavaScript selectors

---

## 14. Next Steps

### Phase 2 Pages to Build
1. Proposal Submission
2. Proposal List & Detail
3. Project Tracking
4. Repository
5. Reports & Analytics
6. Admin Panel
7. Notifications
8. User Profile & Settings

All pages will use the existing component library for consistency.

---

## 15. Support

For questions or issues:
- **Documentation:** See [`docs/component-library.md`](docs/component-library.md)
- **Code Examples:** Check existing HTML files
- **Design Guidelines:** Refer to the project brief

---

## 16. File Sizes

- `css/main.css`: ~8 KB
- `css/components.css`: ~15 KB
- `css/responsive.css`: ~4 KB
- `js/forms.js`: ~4 KB
- `js/dashboard.js`: ~5 KB

**Total:** ~36 KB (unminified, excluding HTML)

---

**Last Updated:** February 9, 2024  
**Version:** 1.0.0  
**Status:** Phase 1 Complete ✅
# NaccerUI
