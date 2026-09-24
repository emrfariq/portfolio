# TECHNICAL INSTRUCTIONS FOR AI ASSISTANT

**Context:** You are building a modern, interactive Next.js portfolio website based on the `design.MD` guidelines. Read these technical constraints carefully before writing any code.

## 1. TECH STACK
* **Framework:** Next.js (App Router, React 18+).
* **Styling:** Tailwind CSS. Use `tailwind-merge` and `clsx` for dynamic classes.
* **Animations:** Framer Motion (page transitions, text reveals, hover effects).
* **3D Rendering:** Menggunakan integrasi file lokal (iframe atau ekstraksi komponen) dari file `retroTV.html` untuk merender scene 3D.

## 2. COMPONENT ARCHITECTURE & LOGIC

### A. Retro TV Hero (`Hero.tsx`)
* **Asset:** Gunakan file `retroTV.html` yang sudah ada untuk menampilkan elemen 3D.
* **Implementation Rules:**
  * Embed file `retroTV.html` menggunakan tag `<iframe>` (atau ubah struktur HTML/JS di dalamnya menjadi komponen React) di dalam kontainer dengan dimensi tetap (misalnya, `h-screen w-full`).
  * Jika menggunakan iframe, tampilkan custom loader (misalnya, teks berkedip "[Tuning Retro TV...]") sebagai fallback atau overlay sementara elemen HTML/3D di dalam iframe sedang dimuat.
  * Pastikan kanvas 3D / iframe ditempatkan di belakang tipografi utama "BE YOURSELF" menggunakan absolute positioning dan `z-index`, tetapi atur agar `pointer-events` tetap bisa menembus (pass through) ke model 3D sehingga pengguna tetap dapat berinteraksi dengan TV retro tersebut.

### B. Project Cards (`ProjectShowcase.tsx`)
* Build a reusable `TicketCard` component.
* Use **Framer Motion** `useMotionValue`, `useSpring`, and `useTransform` to track mouse movement over the card and apply a 3D tilt effect (`rotateX` and `rotateY`).
* Clip the edges of the card using CSS `clip-path` or SVG masks to make it look like a perforated concert ticket.

### C. Custom Cursor Trail (`CursorTrail.tsx`)
* Do not use canvas for this unless necessary. A common approach is an array of `div` elements following the cursor coordinates via a `mousemove` event listener, stored in React State or a Ref.
* Apply a fade-out animation using Framer Motion or pure CSS `opacity` transitions.
* Ensure pointer-events are set to `none` on the cursor trail elements so they don't block clicks.

### D. Konami Code Hook (`useKonamiCode.ts`)
* Create a custom hook that listens to the `keydown` event.
* Track the sequence: `ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a`.
* When triggered, toggle a global state (e.g., via React Context or Zustand) named `isHackerMode`.
* **Theming Strategy:** Use standard Tailwind arbitrary variants or a specific class on the `<html>` tag (e.g., `.dark` or `.hacker`). When `isHackerMode` is true, override all background colors to `bg-black` and text colors to `text-[#00FF41]`, overriding the pastel defaults.

## 3. DEVELOPMENT PHASES (Recommended execution order)
1. Initialize Next.js + Tailwind layout.
2. Implement the Hero Section with the `retroTV.html` component and Typography.
3. Build the 3D Tilt Ticket Card component and populate the 3 mock projects.
4. Add the Custom Cursor Trail.
5. Implement the Konami Code state and alternative CSS variables/Tailwind classes.