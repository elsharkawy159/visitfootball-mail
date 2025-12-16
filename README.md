# visitfootball-mail

Email templates, PDFs, and documents for Visitfootball.

## Navigation System

This project includes a shared sidebar navigation with accordion menus for easy browsing of all templates.

### Files

- `index.html` - Main landing page with template grid
- `shared-navigation.html` - Navigation sidebar HTML (can be included in other pages)
- `shared-styles.css` - Shared navigation styles
- `shared-scripts.js` - Navigation functionality (accordion toggle, active link detection)

### Adding Navigation to Other Pages

To add the shared navigation to any HTML file, include these files in the `<head>` and `<body>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Page Title</title>
    
    <!-- Include shared navigation styles -->
    <link rel="stylesheet" href="shared-styles.css" />
    
    <!-- Your page-specific styles -->
    <style>
      /* Your custom styles here */
      .main-content {
        padding: 40px;
      }
    </style>
  </head>
  <body>
    <!-- Include shared navigation -->
    <aside class="sidebar">
      <!-- Copy the sidebar content from shared-navigation.html -->
      <!-- Or use the loadNavigation() function from shared-scripts.js -->
    </aside>

    <!-- Wrap your content in main-content-wrapper -->
    <div class="main-content-wrapper">
      <main class="main-content">
        <!-- Your page content here -->
      </main>
    </div>

    <!-- Include shared navigation scripts -->
    <script src="shared-scripts.js"></script>
  </body>
</html>
```

### Navigation Categories

- **Email Templates**: All email notification templates
- **Invoices**: Invoice and quote invoice templates
- **PDFs**: Brochure and quote PDF templates
- **Documents**: Contract and terms & conditions

### Features

- ✅ Accordion navigation for organized categories
- ✅ Active link highlighting based on current page
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth animations and transitions
- ✅ Fixed sidebar with scrollable content
