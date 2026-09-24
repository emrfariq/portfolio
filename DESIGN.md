---
name: Glitch Pop Brutalism
colors:
  surface: '#fbf8ff'
  surface-dim: '#dcd9e0'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2fa'
  surface-container: '#f0ecf4'
  surface-container-high: '#eae7ee'
  surface-container-highest: '#e4e1e9'
  on-surface: '#1b1b20'
  on-surface-variant: '#584146'
  inverse-surface: '#303035'
  inverse-on-surface: '#f3eff7'
  outline: '#8b7076'
  outline-variant: '#dfbec5'
  surface-tint: '#b21f5d'
  primary: '#b21f5d'
  on-primary: '#ffffff'
  primary-container: '#ff5e97'
  on-primary-container: '#660030'
  inverse-primary: '#ffb1c5'
  secondary: '#006c44'
  on-secondary: '#ffffff'
  secondary-container: '#25fea8'
  on-secondary-container: '#007147'
  tertiary: '#674bb5'
  on-tertiary: '#ffffff'
  tertiary-container: '#a286f5'
  on-tertiary-container: '#381385'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e1'
  primary-fixed-dim: '#ffb1c5'
  on-primary-fixed: '#3f001b'
  on-primary-fixed-variant: '#8f0046'
  secondary-fixed: '#50ffaf'
  secondary-fixed-dim: '#00e293'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005232'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#cebdff'
  on-tertiary-fixed: '#21005e'
  on-tertiary-fixed-variant: '#4f319c'
  background: '#fbf8ff'
  on-background: '#1b1b20'
  surface-variant: '#e4e1e9'
  canvas-cream: '#FDFBF7'
  bubblegum-pink: '#FF5E97'
  electric-mint: '#00F5A0'
  soft-lavender: '#D6BCFA'
  acid-yellow: '#FFE600'
  cyber-cyan: '#00E5FF'
  brutal-black: '#0E0E12'
  terminal-black: '#050505'
  terminal-green: '#00FF41'
  terminal-dim-green: '#008F24'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 112px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: 0.02em
  display-xl-mobile:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  display-lg:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.01em
  display-lg-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Anton
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.03em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes a high-voltage, Gen-Z maximalist visual identity tailored for a technical Fullstack Developer & System Analyst. The aesthetic balances deep systems engineering credibility with unapologetic, internet-native creative chaos. It rejects the sanitized, clinical minimalism of modern enterprise tech in favor of "Brutalist-Lite" kinetic maximalism: heavy black ink lines, high-contrast candy pastels, terminal readouts, ticket-stub perforations, and intentional compositional friction.

The target audience spans creative directors, startup founders, and engineering leaders looking for standout talent capable of bridging complex architecture and cutting-edge frontend expression. The emotional response is energetic, irreverent, and undeniably technical—evoking the thrill of an arcade cabinet fused with an AWS control terminal.

## Colors

The core color strategy operates on a dual-reality model: **Pop Maximalist Mode** (default) and **Terminal Hacker Mode** (Konami Code unlock).

### Pop Maximalist Mode (Default)
- **Primary Canvas & Surfaces:** Soft warm canvas cream (`#FDFBF7`) paired with brutal stark black (`#0E0E12`) borders and ink fills.
- **Accents:** High-saturation pastels dominate component containers and badge stickers: Bubblegum Pink (`#FF5E97`), Electric Mint (`#00F5A0`), Soft Lavender (`#D6BCFA`), and punchy shock points in Acid Yellow (`#FFE600`) and Cyber Cyan (`#00E5FF`).
- **Contrast Philosophy:** Backgrounds and colored fills are framed with structural, high-contrast solid black strokes (`#0E0E12`) ensuring all pastel layers retain accessibility and hard geometric distinction.

### Terminal Hacker Mode (Easter Egg)
When activated, the entire palette drops into pure scanline dark space:
- Background flips to Pitch Terminal Black (`#050505`).
- Surface borders, typography, and interactive outlines convert entirely to glowing Matrix phosphor `#00FF41` and secondary hierarchy `#008F24`.
- Shadows transform into 0-spread electric green hard-box shifts.

## Typography

The type system stages a deliberate friction between physical poster scale and developer terminal clarity.

- **Headlines & Display:** **Anton** delivers towering, monumental, condensed visual weight. Display text is kept exclusively uppercase with tight vertical tracking to dominate canvas space and command immediate attention.
- **Body & Longform:** **JetBrains Mono** reinforces the System Analyst persona. Highly legible code-style formatting communicates precision, logic, and structure within technical narratives.
- **Labels, Badges, & System Status:** **Space Mono** provides retro-futuristic metadata stamps, technical tags, timestamping, and interface telemetry.

## Layout & Spacing

This design system embraces a **controlled broken grid**. While underpinned by an 8-column (tablet) and 12-column (desktop) structure, interactive elements, stickers, and cards intentionally overlap margins and break column boundaries via z-index planes.

- **Desktop (1024px+):** 12-column layout with `2.5rem` margins and `1.5rem` gutters. Elements utilize off-axis rotations (`-2deg` to `+3deg`) and multi-layer CSS grid placement where text and media overlap without compromising readability.
- **Mobile (<768px):** 4-column flow with `1.25rem` outer canvas padding and `1rem` gutters. Rotations are normalized to `-1deg` or `0deg` on viewport borders to prevent unintended horizontal overflow.
- **Infinite Marquee Strips:** Full-bleed horizontal ribbons (`100vw`) ignore canvas constraints, separating content sections with continuous scrolling typography.

## Elevation & Depth

Visual hierarchy abandons fuzzy, diffused drop shadows entirely. Depth is achieved strictly through **tactile hard-offset neo-brutalism** and multi-plane Z-layering:

- **Hard-Drop Shadows:** Surfaces cast solid, unblurred black shadows (`#0E0E12`) offset by `4px 4px`, `6px 6px`, or `10px 10px`. 
- **Z-Index Architectural Hierarchy:**
  - `z-0`: Ambient background patterns (isometric technical grid paper, noise texture).
  - `z-10`: Massive hero typography (`"BE YOURSELF"` screen-filler).
  - `z-20`: Interactive canvas artifacts (floating 3D Retro TV, canvas stickers).
  - `z-30`: Foreground content cards, ticket modules, and marquee ribbons.
  - `z-40`: Persistent HUD overlays (Spinning vinyl Spotify player, status tags).
  - `z-50`: Custom trailing ribbon cursor and global terminal overlays.
- **Hacker Elevation Override:** When terminal mode activates, solid ink offsets transition into glowing phosphor vector shadows: `4px 4px 0px #00FF41`.

## Shapes

The geometric identity balances brutalist structural boxiness with micro-softened edges to maintain Gen-Z pop friendliness:

- **Base Radius:** `0.25rem` (soft) on primary cards, code blocks, and functional modules, preserving industrial bite without sharp needle points.
- **Punch Cards & Perforations:** Project cards feature circular scalloped cutout masks (`mask-image: radial-gradient`) along their dividing seams to simulate tear-off event tickets and vintage concert passes.
- **Pill Badges:** Informational tags, system status indicators, and micro-stickers utilize full pill radiuses (`rounded-full`) to contrast against chunky rectangular containers.
- **Borders:** Universal `2.5px` to `3.5px` solid black borders define structural perimeters across all primary components.

## Components

### Buttons
- **Primary Pop Button:** Stiff `3px` solid `#0E0E12` outline, vibrant Electric Mint (`#00F5A0`) or Bubblegum Pink (`#FF5E97`) surface fill, Space Mono bold uppercase text. Features a `4px 4px 0px #0E0E12` hard drop shadow. On hover/active, the button translates `+2px, +2px` while the shadow collapses to `2px 2px 0px`.
- **Terminal Button (Easter Egg):** `#050505` background, `2px` solid `#00FF41`, glowing green monospace text. Hover inverts colors to `#00FF41` fill with black text.

### Project Showcase Cards (Retro Ticket & Poster Format)
- Dual-segment card styling:
  - **Main Stub (Poster):** Houses project preview graphics, system architecture metrics, and high-impact Anton headers.
  - **Perforated Tear-off Stub:** Separated by a dashed border (`border-dashed 2px #0E0E12`) with half-circle notch cutouts at top and bottom. Houses stack badges (e.g., `POSTGRES`, `NEXTJS`, `K8S`), project timeline, and interactive access arrows.
- **Motion:** Interactive 3D tilt tracking cursor motion (`transform: perspective(1000px) rotateX(...) rotateY(...)`).

### Chips & Stickers
- System tags styled like physical die-cut vinyl stickers: variable background fills (Acid Yellow, Soft Lavender), bold black strokes, slight random tilt angles (`transform: rotate(-3deg)`), and stark monospaced labeling.

### Persistent Spotify Widget ("Now Playing")
- Anchored to bottom-right viewport (`margin: 1.5rem`).
- Designed as a hybrid between a spinning 8-bit vinyl record and a retro portable cassette player.
- Features a continuously spinning turntable center, song telemetry in JetBrains Mono, and animated CSS equalizer bars.

### Form Inputs & Terminal Controls
- Inputs use `#FDFBF7` surface, `3px` border, monospace input font, and Acid Yellow focus highlights with hard-offset box shadows.
- Prefix symbols (`$ _`) baked into input fields to reinforce command-line functionality.

### Custom Interactive Cursor
- Default cursor is replaced with an ink crosshair or custom vector arrow, rendering an ephemeral trailing neon vector ribbon that dissolves smoothly over 1.5 seconds.