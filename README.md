# Aiegx — Embedded Computing & Edge AI Platform

Official web application for **Aiegx**, a next-generation embedded computing and edge AI hardware platform. Built with React 19, Vite, Tailwind CSS v4, and Three.js / React Three Fiber.

---

## Key Features

- **Interactive 3D Hardware Model:** Real-time 3D rendering of the Aiegx System-on-Module (SoM) board using Three.js and React Three Fiber, featuring interactive rotation, natural 3/4 perspective auto-framing, dynamic bounding box calculation, and futuristic cyan lighting.
- **Dark Mode & Light Mode:** Seamless theme toggle with animated Sun/Moon transitions, persistent user preferences via `localStorage`, and an icy-blue light mode tailored for enterprise hardware presentations.
- **Enterprise Mega-Menus:** Multi-column dropdown menus for **Products**, **Applications**, **Developers**, **Solutions**, and **About Us**, featuring high-contrast typography, independent column scrolling, and responsive drill-down navigation for mobile/tablet screens.
- **Brand & Product Showcase:** Dedicated architecture and brand pages for Tier-1 silicon partners including NXP, Texas Instruments, and Qualcomm.
- **Modern Hardware Design Language:** Futuristic circuit-line background accents, custom SVG grid overlays, subtle ambient glows, and responsive typography.

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| **React 19** | Modern UI components and hooks |
| **Vite** | Fast Next-Gen frontend tooling & bundler |
| **Tailwind CSS v4** | Utility-first styling with custom dark-mode variants |
| **Three.js & @react-three/fiber** | Interactive 3D graphics & WebGL rendering |
| **@react-three/drei** | High-performance 3D helpers and OrbitControls |
| **Lucide React** | Clean, accessible iconography |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` (bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sharmaji0108/Aiegx.git
   cd Aiegx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   Production-ready assets are compiled to the `dist/` directory.

---

## Project Structure

```
aiegx-new-website/
├── public/
│   ├── images/              # Product and application photography
│   └── models/              # 3D GLTF/GLB models (PCB hardware)
├── src/
│   ├── components/
│   │   ├── common/          # Logo, ThemeToggle, Footer
│   │   ├── header/          # Navbar and mega-menus (Products, Applications, etc.)
│   │   ├── hero/            # Hero section and 3D PCB model visualizer
│   │   ├── products/        # Product catalog and cards
│   │   ├── applications/    # Industry solutions and customer stories
│   │   ├── solutions/       # Embedded computing architectures
│   │   └── developers/      # Carrier board design & developer resources
│   ├── context/             # ThemeContext (Dark/Light mode state)
│   ├── pages/               # Brand & Product detail pages (NXP, TI, Qualcomm)
│   ├── styles/              # Global CSS & Tailwind configuration
│   ├── App.jsx              # Application root and route orchestrator
│   └── main.jsx             # React DOM entry point
├── index.html               # Main HTML entry with pre-hydration script
├── vite.config.js           # Vite build configuration
└── package.json             # Project dependencies and scripts
```

---

## License

Private & proprietary — Aiegx.
