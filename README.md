# Sudhanshu Ranjan — Portfolio Website

A modern, illustration-style personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It showcases my skills, projects, education, and contact information in a clean, responsive, and animated single-page experience.

**Live Demo:** [modern-portfolio-iota-brown.vercel.app](https://modern-portfolio-iota-brown.vercel.app/)

---

## Live Links

| Platform   | Link |
| ---------- | ---- |
| **Portfolio** | [modern-portfolio-iota-brown.vercel.app](https://modern-portfolio-iota-brown.vercel.app/) |
| GitHub     | [github.com/sudhanshu-0109](https://github.com/sudhanshu-0109) |
| LinkedIn   | [Sudhanshu Ranjan](https://www.linkedin.com/in/sudhanshu-ranjan-596358350) |
| LeetCode   | [sudhanshuranjan0109](https://leetcode.com/u/sudhanshuranjan0109/) |
| Email      | [sudhanshuranjan0109@gmail.com](mailto:sudhanshuranjan0109@gmail.com) |

---

## About Me

**Sudhanshu Ranjan**  
Aspiring Software Engineer | Full-Stack Developer | Backend Enthusiast

B.Tech CSE student at **Parul Institute of Technology** (2024–2028), focused on full-stack development and backend architecture. I work with Java, Python, React.js, Django REST Framework, and modern web technologies to build scalable, real-world applications.

---

## Features

- **Responsive layout** — Optimized for mobile, tablet, and desktop
- **Smooth animations** — Section transitions and hover effects powered by Framer Motion
- **Custom cursor** — Interactive blend-mode cursor for a polished feel
- **Typewriter hero** — Animated introduction using `react-type-animation`
- **Skills showcase** — Icon grid highlighting core technologies
- **Education timeline** — Academic background with institution and achievements
- **Project gallery** — Featured work with descriptions and GitHub links
- **Resume download** — One-click PDF download from the navbar
- **Social integration** — Gmail, LinkedIn, LeetCode, and GitHub profile links
- **SEO-ready** — Meta tags, Open Graph, and Twitter card support in `index.html`

---

## Tech Stack

| Category      | Technologies |
| ------------- | ------------ |
| Framework     | React 19 |
| Build Tool    | Vite 6 |
| Styling       | Tailwind CSS 3 |
| Animations    | Framer Motion |
| Icons         | React Icons |
| Typography    | Sora (Google Fonts) |
| Linting       | ESLint |

---

## Sections

| Section   | Description |
| --------- | ----------- |
| **Home**  | Hero intro, role headline, bio, and social links |
| **Skills**| Technology stack and education history |
| **About** | Background, interests, and professional summary |
| **Projects** | healthcare+, Office Management System, Sidcup Family Golf Clone |
| **Contact** | Contact form UI, email, phone, and social profiles |
| **Footer** | Branding and copyright |

---

## Featured Projects

| Project | Stack | Repository |
| ------- | ----- | ---------- |
| **healthcare+** — Transparent Hospital Workflow System | Django REST Framework, React.js, SQLite | [final_healthcare](https://github.com/sudhanshu-0109/final_healthcare) |
| **Office Management System** | Django, PostgreSQL, Bootstrap | [Office_management_system](https://github.com/sudhanshu-0109/Office_management_system) |
| **Sidcup Family Golf Clone** | HTML, CSS, JavaScript, GSAP | [Sidcup-Family-Golf-clone](https://github.com/sudhanshu-0109/Sidcup-Family-Golf-clone) |

---

## Project Structure

```
illustration-portfolio/
├── public/
│   ├── assets/              # Images, illustrations, logos
│   └── resume/              # Resume PDF for download
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── utils/
│   │   └── CursorAnimation.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               # SEO & meta tags
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sudhanshu-0109/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (default: `http://localhost:5173`).

---

## Available Scripts

| Command           | Description |
| ----------------- | ----------- |
| `npm run dev`     | Start Vite dev server with hot reload |
| `npm run build`   | Create production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project |

---

## Customization

Update content in the following files without changing layout or styling:

| Content        | File(s) |
| -------------- | ------- |
| Hero & social  | `src/pages/Home.jsx` |
| About text     | `src/components/About.jsx` |
| Skills & education | `src/components/Skills.jsx` |
| Projects       | `src/components/Projects.jsx` |
| Contact info   | `src/components/Contact.jsx` |
| Resume link    | `src/components/Navbar.jsx` |
| Logo           | `public/assets/logo.png` |
| Resume PDF     | `public/resume/sudhanshu_ranjan_resume.pdf` |
| SEO metadata   | `index.html` |

---

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Netlify

1. Push the project to GitHub.
2. Connect the repo on [netlify.com](https://www.netlify.com).
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## Contact

| | |
|---|---|
| **Name** | Sudhanshu Ranjan |
| **Phone** | +91 9122884453 |
| **Email** | sudhanshuranjan0109@gmail.com |
| **GitHub** | [@sudhanshu-0109](https://github.com/sudhanshu-0109) |
| **LinkedIn** | [Sudhanshu Ranjan](https://www.linkedin.com/in/sudhanshu-ranjan-596358350) |
| **LeetCode** | [sudhanshuranjan0109](https://leetcode.com/u/sudhanshuranjan0109/) |

---

## License

This project is open source and available for personal and educational use.  
If you use or adapt this template, attribution is appreciated.

---

<p align="center">
  Built with ❤️ by <strong>Sudhanshu Ranjan</strong>
</p>
