# DroneTV.in — Frontend Web Project

> India's premier UAV technology platform — custom enterprise drone services, DGCA-certified pilot training, and cinematic aerial media production.

---

## 📁 Project Overview

DroneTV.in is a fully responsive multi-page website built as part of a UI/UX design and frontend development assignment. The project spans Figma design to production-ready HTML/CSS/JS code, covering both desktop and mobile responsive layouts.

---

## 🗂️ Pages Included

| Page | Description |
|---|---|
| **Landing Page** | Hero section, partner logos, drone services preview, courses, news, testimonials, stats, and CTA |
| **Services Page** | Browse & filter drone services by category, operational process steps, and CTA |
| **Courses Page** | DGCA-certified training programs, course cards, FAQs, and enrollment CTA |
| **Login Page** | Email/password login form with Google OAuth, split-screen layout |
| **User Dashboard** | Enrolled courses, active course progress, upcoming classes schedule, recent activity |

---

## 🎨 Design System

### Color Palette

| Role | Hex | Usage |
|---|---|---|
| Primary | `#FFFFFF` | Backgrounds, cards, light surfaces |
| Secondary | `#000000` | Headings, body text, dark elements |
| Accent | `#D4A600` | CTAs, highlights, links, active states, nav indicators |

### Typography

| Element | Size | Weight | Usage |
|---|---|---|---|
| Main Heading | `56px` | Bold | Hero section titles |
| Sub Heading | `36px` | Bold | Page-level headings |
| Section Heading | `28px` | Bold | Section titles within pages |
| Body / Description | `18px` | Regular | General paragraph text |
| Small Sub Text | `13px` | Bold | Labels, tags, badges |
| Navbar | `15px` | Semi-Bold | Navigation links |
| Card Heading | `19px` | Bold | Course/service card titles |
| Card Description | `14px` | Regular | Card body text |
| Footer Text | `16px` | Regular | Footer links and content |
| Footer Bold Text | `15px` | Bold | Footer section headings |

### Font Family
-Primary: Segoe UI (Microsoft's native UI font, falls back to system sans-serif)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Design | Figma (responsive frames — desktop & mobile) |
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, grid) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Responsiveness | CSS Media Queries (mobile-first) |

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Target |
|---|---|---|
| Mobile | `< 768px` | Smartphones |
| Tablet | `768px – 1024px` | iPads, small laptops |
| Desktop | `> 1024px` | Standard screens |
| Large Desktop | `> 1440px` | Wide / 2x screens |

---

## 🧩 Component Inventory

### Global
- Navbar with logo, nav links, Login & Get Started buttons
- Footer with quick links, services, training links, and contact info
- Social media icons row

### Landing Page
- Hero banner with drone background, headline, and dual CTAs
- Partner logo ticker / grid
- Service cards (4-column grid)
- Course cards (3-column grid with level badges and pricing)
- News/blog cards with category tags
- Testimonial cards
- Stats bar (500+ Pilots, 200+ Projects, 50+ Clients, 15+ States)
- Full-width CTA banner

### Services Page
- Hero section with headline
- Category filter chips (All, Drone, Agriculture, Police, Core, Support, Construction, Surveying, Inspection, Photography, Emergency Services, Machine Learning)
- 4-column service card grid with images, titles, descriptions, and Learn More links
- Pagination component
- 3-step operational process section
- Full-width CTA banner

### Courses Page
- Hero banner (dark overlay on drone image)
- 3-column course card grid with level badge, duration, bullet features, pricing, and Enroll CTA
- Pagination component
- "Why Learn With DroneTV" — 4 feature cards with icons
- FAQ accordion (4 items)
- Full-width CTA banner

### Login Page
- Split-screen layout (form left, hero image right)
- Email + Password inputs with show/hide toggle
- Remember Me checkbox + Forgot Password link
- Primary Login button
- Divider with Google OAuth button
- Sign Up redirect link

### User Dashboard
- Sidebar navigation (Dashboard, My Courses, Certificates, Settings, Help & Support, Logout)
- Top bar with greeting and user avatar
- Stats cards row (Courses Enrolled, Courses Completed, Flight Hours Logged, Official Certificates)
- Active course cards with progress bars, next session info, and Continue Learning CTA
- Recent Activity feed (timestamped log entries)
- Upcoming classes table (Date, Time, Course Name, Instructor, Location/Mode, Status)

---

## 🗃️ Folder Structure

```
i_page/
├── .vscode/
│   └── launch.json         # VS Code debug/launch config
├── css/
│   └── style.css           # All styles — variables, reset, typography, layout, components
├── image/                  # All image assets (drone photos, icons, logos)
├── js/
│   └── script.js           # All JavaScript — interactions, filters, accordion, nav toggle
├── index.html              # Landing Page
├── services.html           # Services Page
├── courses.html            # Courses Page
├── login.html              # Login Page
└── dashboard.html          # User Dashboard
```

---

## ✅ Key Design Decisions

- **Accent color `#D4A600`** (golden yellow) is used exclusively for interactive elements — CTAs, active nav states, links, progress bars, and highlighted data — to create strong visual hierarchy.
- **Dark hero overlays** on course and service pages maintain text legibility over drone photography backgrounds.
- **Card-based layout** is used consistently across services, courses, and news to ensure scannable, grid-aligned content.
- **Dashboard sidebar** is fixed-width at desktop; collapses to a hamburger/bottom nav on mobile.
- **Login page** uses a split-screen pattern: form on the left, full-height brand image on the right (hidden on mobile).

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern browser — no build tools required.
3. Navigate between pages using the navbar links.

> No frameworks, no bundlers, no dependencies. Pure HTML/CSS/JS.

---

## 🎓 Assignment Context

This project was completed as part of a UI/UX + Frontend Development assignment. The workflow followed:

1. **Figma Design** — Designed all 5 pages in Figma with responsive frames (desktop + mobile).
2. **Design System** — Defined typography scale, color palette, and component library in Figma.
3. **Frontend Build** — Converted Figma designs into semantic HTML, modular CSS, and vanilla JS.
4. **Responsive QA** — Tested across breakpoints to ensure layout integrity on all screen sizes.

---

## 📬 Contact / Credits

**Product:** DroneTV.in — UAV Technology Platform  
**Company:** DroneTV India Tech Private Limited  
**Address:** DroneTV 5A/6B, White Waters, Timber Lake Colony, Shaikpet, Hyderabad – 500008, India  
**Email:** bd@dronetv.in  
**Phone:** +91 7520123555

---


