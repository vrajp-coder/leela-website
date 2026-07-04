# Leela Photography Portfolio Website

A custom photography portfolio website built for a professional photographer using **HTML, CSS, and vanilla JavaScript**. The site showcases multiple photography collections through responsive image galleries, embedded carousels, and multimedia pages while maintaining a lightweight, static architecture with no backend dependencies.

> **Live Site:** https://leelapereira.com

---

# Project Overview

This website was originally developed as a client project and has since undergone a significant refactor focused on improving maintainability, organization, and performance while preserving the original user interface that the client preferred.

The project intentionally remains a **fully static website**. There is no server-side code or database; all content is delivered through HTML, CSS, JavaScript, and static assets.

---

# Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)
- Git & GitHub
- SSH/SFTP deployment (BlueHost)
- FileZilla
- Python HTTP Server (local development)

---

# Features

## Portfolio Galleries

The site contains multiple photography collections including:

- People
- Family
- Product
- Costume
- 7.1 Megapixels
- Play Pretend
- Street

Additional portfolio categories can be added with minimal code changes.

Each gallery includes:

- responsive image grid
- hover overlays
- image titles
- "View More" interactions
- full-screen carousel viewer
- keyboard-friendly navigation structure

---

## Navigation

The navigation bar contains multiple dropdown menus:

### Portfolio

- People
- Wedding (Coming Soon)
- Engagement (Coming Soon)
- Family
- Product

### Personal

- 7.1 Megapixels
- Costume
- Play Pretend
- Street

The navigation automatically highlights the active page and active dropdown section.

---

## Multimedia

Some pages contain embedded media including:

- image carousels
- MP4 video
- descriptive captions

These are displayed inline rather than as modal overlays when appropriate.

---

# Refactor Highlights

A major refactor was performed after the initial version of the website was completed.

Major improvements included:

## Project Organization

Originally nearly every file (HTML, images, fonts, CSS, JS, video) existed inside one large `public_html` directory.

The project was reorganized into:

```
public_html/
│
├── assets/
│   ├── css/
│   ├── js/
│   │   └── data/
│   ├── fonts/
│   ├── img/
│   └── video/
│
├── index.html
├── people.html
├── family.html
├── product.html
├── ...
```

This significantly improved maintainability while remaining compatible with BlueHost hosting.

---

## CSS Refactor

Large amounts of duplicated inline CSS were extracted into reusable stylesheets including:

- main.css
- nav.css
- page-specific CSS files

This reduced duplication and simplified future styling changes.

---

## JavaScript Refactor

JavaScript was modularized using ES6 modules.

Carousel data was moved into page-specific data files:

```
assets/js/data/
```

Examples:

- people.js
- family.js
- product.js
- costume.js
- megapixels.js
- street.js

The carousel logic itself was centralized into reusable JavaScript.

---

## Asset Management

Image, font, and video paths were updated throughout the project to use a consistent asset structure.

This made future expansion significantly easier while remaining compatible with BlueHost deployment.

---

## Performance Improvements

The refactor focused heavily on improving loading performance.

Improvements included:

- reduced duplicated CSS
- reduced duplicated JavaScript
- centralized reusable components
- cleaner asset organization
- simplified maintenance
- improved page loading

---

# Deployment

The production website is hosted on **BlueHost**.

Deployment workflow:

1. Develop locally.
2. Test using Python's built-in HTTP server.
3. Verify all navigation and galleries.
4. Upload updated files via SSH/SFTP using FileZilla.
5. Verify changes on the live website.

SSH deployment replaced the original manual upload workflow through the BlueHost web interface.

---

# Running Locally

Clone the repository:

```bash
git clone https://github.com/vrajp-coder/leela-website.git
```

Navigate to the project directory:

```bash
cd public_html
```

Start a local server:

```bash
python -m http.server 8000
```

Open:

```
http://localhost:8000
```

---

# Repository Notes

To respect the client's intellectual property, this repository intentionally excludes large client media assets.

The following directories are excluded through `.gitignore`:

```
assets/img/
assets/video/
```

As a result, image galleries and videos will not display unless those assets are restored locally.

The repository is intended to demonstrate the site's architecture, implementation, and code quality rather than redistribute the client's photography.

---

# Skills Demonstrated

- Front-end Web Development
- HTML/CSS Architecture
- Vanilla JavaScript
- ES6 Modules
- Responsive Layout Design
- UI Refactoring
- Static Website Optimization
- Code Organization
- Client Collaboration
- Version Control (Git)
- GitHub
- SSH/SFTP Deployment
- Website Maintenance

---

# Future Improvements

Potential future enhancements include:

- automatic thumbnail generation
- lazy loading for gallery images
- image compression pipeline
- reusable gallery component generation
- accessibility improvements (ARIA and keyboard navigation)
- responsive navigation improvements
- automated deployment workflow
- optional content management system integration

---

# Author

**Vraj Pandya**

This project was developed for a client as a custom photography portfolio website and has been continuously maintained and improved over time with a focus on performance, maintainability, and clean project organization.