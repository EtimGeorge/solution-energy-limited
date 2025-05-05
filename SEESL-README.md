# SEESL Website

This repository contains the website for Solution Energy and Engineering Services Limited (SEESL), a company providing a variety of world-class engineering and technical services.

## Overview

The SEESL website is designed to showcase the company's services, expertise, and projects. It features a modern, responsive design with a clean user interface that adapts to all device sizes. The site includes information about the company's services, mission, vision, team, projects, and contact information.

## Website Structure

The website follows this structure:

```
SEESL-Website/
│
├── index.html                      # Home page
├── about.html                      # About page
├── contact.html                    # Contact page
├── privacy-policy.html             # Privacy policy
├── terms-of-service.html           # Terms of service
│
├── css/                            # CSS directory
│   ├── variables.css               # CSS variables for theme
│   ├── styles.css                  # Main stylesheet
│   └── iso.css                     # ISO certification styles
│
├── js/                             # JavaScript directory
│   ├── main.js                     # Main JavaScript file
│   └── iso.js                      # ISO certification scripts
│
├── images/                         # Images directory
│   ├── logo-placeholder.png        # SEESL logo
│   ├── service-*.jpg               # Service images
│   ├── facility-*.jpg              # Facility images
│   └── various other images...     # Other website images
│
└── services/                       # Services directory
    ├── engineering.html            # Engineering services
    ├── asset-management.html       # Asset Management services
    ├── gas-conversion.html         # Gas Conversion services
    ├── renewable-energy.html       # Renewable Energy services
    ├── civil-construction.html     # Civil Construction services
    ├── tank-cleaning.html          # Tank Cleaning services
    │
    └── iso-certification/          # ISO certification section
        ├── index.html              # ISO main page
        ├── process.html            # ISO process page
        ├── certification.html      # ISO certification page
        ├── audit.html              # ISO audit page
        └── training.html           # ISO training page
```

## Navigation Structure

The website follows a hierarchical navigation structure:

1. **Main Navigation**
   - Home
   - About
   - Services (dropdown)
   - Contact

2. **Services Dropdown**
   - Engineering
   - Asset Management
   - Gas Conversion
   - Renewable Energy
   - Civil Construction
   - Tank Cleaning
   - ISO Certification

3. **ISO Certification Section**
   - ISO Overview
   - Certification Process
   - Training
   - Audit
   - ISO Process

## Features

- **Responsive Design**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Mobile Navigation**: Hamburger menu for smaller screens
- **Service Showcase**: Detailed service pages with images and descriptions
- **Contact Form**: Interactive form with validation
- **Modern UI**: Clean, professional interface with consistent branding
- **Optimized Performance**: Fast loading times with optimized assets
- **ISO Integration**: Seamless integration with the ISO certification section

## CSS Architecture

The CSS architecture uses a streamlined approach:

- **variables.css**: Contains CSS custom properties (variables) for colors, fonts, spacing, etc., making it easy to maintain consistent styling throughout the site.
- **styles.css**: Main stylesheet containing all global styles, components, and page-specific styles in one consolidated file.
- **iso.css**: Contains styles specific to the ISO certification section.

### CSS Variables

The website uses CSS variables for consistent theming across the entire site. This includes:

- **Color scheme**: Primary, secondary, and accent colors
- **Typography**: Font families, sizes, weights
- **Spacing**: Consistent margins and paddings
- **Breakpoints**: Standard responsive breakpoints
- **Dark/Light mode**: Theme variables that change based on selected mode

## JavaScript Organization

The JavaScript is organized efficiently:

- **main.js**: Handles all core website functionality including navigation, theme switching, forms, and general interactions.
- **iso.js**: Contains functions specific to the ISO certification section.

### Key JavaScript Functionality

1. **Theme Switching**: 
   - Detects user's system preference
   - Allows manual toggling between dark/light modes
   - Persists user's preference using localStorage

2. **Mobile Navigation**:
   - Hamburger menu toggle for mobile devices
   - Dropdown menu management
   - Smooth transitions and animations

3. **Form Handling**:
   - Input validation
   - Form submission with appropriate feedback
   - Prevention of spam submissions

4. **ISO Integration**:
   - Functions for integration with ISO certification pages
   - Seamless user experience between main site and ISO section

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript**: ES6+ for interactive elements
- **Font Awesome**: Icon library for user interface icons
- **Google Fonts**: Web fonts for typography

## Development Setup

To set up this project for local development:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/seesl-website.git
   cd seesl-website
   ```

2. Open the project in your preferred code editor.

3. For local development with live reload, you can use any local server. Example with Python:
   ```
   # Python 3
   python -m http.server
   
   # Then visit http://localhost:8000 in your browser
   ```

## ISO Certification Integration

The ISO certification section is fully integrated with the main website, sharing:
- Common design elements
- Navigation structure
- Theme switching
- Contact forms

The ISO section exists as a subdirectory under services, making it both a part of the services offered and a distinct section with its own pages.

## Content Management

### Adding a New Service

To add a new service:

1. Create a new HTML file in the `services/` directory
2. Copy the structure from an existing service page
3. Update the content, images, and meta information
4. Add a link to the new service in the navigation menu (in all HTML files)

### Updating Images

1. Optimize images for web before uploading (recommended tools: ImageOptim, TinyPNG)
2. Place images in the appropriate directory under `images/`
3. Reference images using relative paths (e.g., `../images/service-example.jpg`)

## Browser Compatibility

The website is designed to work on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Maintenance

Regular maintenance tasks:

1. **Content updates**: Keep services, projects, and contact information current
2. **Image optimization**: Ensure new images are properly optimized
3. **Browser testing**: Periodically test on different browsers and devices
4. **Link checking**: Verify all internal and external links are working
5. **Performance monitoring**: Check page load times and optimize as needed

## SEO Considerations

The website includes:
- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions for each page
- Alt text for images
- Descriptive page titles
- Sitemap.xml for search engines

## License

All rights reserved. This website and its content are the property of Solution Energy and Engineering Services Limited.

## Contact

For questions or support regarding this website, contact:
- info@solutionenergylimited.com
- +234 (915) 312-3973