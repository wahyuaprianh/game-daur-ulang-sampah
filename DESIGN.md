---
name: Petualangan Daur Ulang
colors:
  surface: '#f4faff'
  surface-dim: '#cbdde7'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#dff1fb'
  surface-container-high: '#d9ebf5'
  surface-container-highest: '#d4e5ef'
  on-surface: '#0d1e25'
  on-surface-variant: '#3f4a3c'
  inverse-surface: '#23333a'
  inverse-on-surface: '#e2f3fd'
  outline: '#6f7a6b'
  outline-variant: '#becab9'
  surface-tint: '#006e1c'
  primary: '#006e1c'
  on-primary: '#ffffff'
  primary-container: '#4caf50'
  on-primary-container: '#003c0b'
  inverse-primary: '#78dc77'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#39bfff'
  on-secondary-container: '#004b69'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cda721'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  background: '#f4faff'
  on-background: '#0d1e25'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 44px
    fontWeight: '700'
  body-md:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system defines an engaging, gamified environmental education platform built specifically for Indonesian elementary school students aged 7–10. The brand expression combines a vibrant, inviting nature palette with tactile arcade video-game ergonomics: chunky controls, instant visual feedback, dynamic reward badges, and rounded containers. 

### Visual Style
- **Aesthetic Movement:** Tactile Arcade meets Warm Flat Playful. It avoids cold corporate minimalism in favor of friendly dimensional buttons, bouncy response states, and warm cream backdrops that reduce visual fatigue during interactive sessions.
- **Tone of Voice & Character:** Optimistic, encouraging, celebratory, and clear ("Ayo Pilah!", "Hebat Sekali!"). The UI treats sorting waste not as a chore, but as an adventurous quest.
- **Audience Ergonomics:** Designed for young learners with developing fine-motor coordination and emerging reading skills. Interactive targets are enlarged (minimum 56px touch height), colors serve direct informational roles (sorting bin semantics), and iconography always reinforces text labels.

## Colors

The color palette is built on high clarity, warm tones, and precise functional category mapping aligned with waste education standards.

### Functional Waste Bin System
- **Organik (Leaf Green):** Base `#4CAF50`, Shade/Edge `#2E7D32`, Surface Tint `#E8F5E9`. Used for compostable materials, food waste, and organic recycling.
- **Anorganik (Sky Blue):** Base `#29B6F6`, Shade/Edge `#0288D1`, Surface Tint `#E1F5FE`. Dedicated to dry recyclables like plastic bottles, glass, and metal cans.
- **B3 / Berbahaya (Hazard Coral):** Base `#FF5252`, Shade/Edge `#D32F2F`, Surface Tint `#FFEBEE`. Reserved for hazardous household items (batteries, light bulbs, electronics, and chemicals).

### Accent & Reward Colors
- **Koin & Prestasi (Sunny Yellow / Amber):** Base `#FFD54F`, Shade/Edge `#FFA000`, Tint `#FFF8E1`. Highlights stars, score meters, and unlocked badges.
- **Energy & Combos (Bright Orange):** Base `#FF7043`, Shade/Edge `#E64A19`. Applied to combo streaks, streak bonuses, and urgent timers.

### Canvases & Neutrals
- **Canvas Base:** `#FFFDF5` (Warm Milk). Eliminates harsh screen glare while maintaining a clean, cheerful vibe.
- **Card & Modal Surface:** `#FFFFFF` (Pure White) with `#FFF9E6` (Soft Butter Cream) inner containers for secondary groupings.
- **Text & Outlines:** `#37474F` (Deep Slate Charcoal) as primary text for high contrast (passes WCAG AAA against canvas). Secondary text is `#546E7A`.

## Typography

Quicksand is deployed uniformly across headlines, game badges, and body content. Its geometric, rounded terminals evoke warmth and natural friendliness while retaining strict legibility for young readers.

## Layout & Spacing

The layout philosophy uses a centered, card-anchored stage. The gameplay arena conforms to a comfortable max-width bounded viewport (maximum 1140px on desktop) to ensure items to be sorted remain tightly aligned with their target bins.

## Elevation & Depth

Visual hierarchy uses physical, tactile elevation inspired by toy blocks and arcade buttons. Surfaces do not rely on generic, blurry dropshadows; depth is achieved via solid dimensional "undertones" (a darker tone rim on the bottom edge) coupled with soft ambient grounding.

## Components

### 1. Chunky Action Buttons (Tombol Aksi)
- **Dimensions:** Minimum height of 56px (large primary actions reach 64px), horizontal padding of 32px.
- **Variants:**
  - *Primary (Hijau Petualang):* Background `#4CAF50`, text `#FFFFFF`, 4px bottom shadow border in `#2E7D32`.
  - *Secondary (Kuning Ceria):* Background `#FFD54F`, text `#37474F`, 4px bottom shadow border in `#FFA000`.
  - *Hazard/Keluar (Merah):* Background `#FF5252`, text `#FFFFFF`, 4px bottom shadow border in `#D32F2F`.
- **States:** Hover lifts by 1px; Active translates down 3px with the bottom border collapsing to 1px.

### 2. Waste Bins (Tempat Sampah Interaktif)
- Large, distinct bucket-shaped containers with rounded rims and an integrated icon badge.
- **Organik Bin:** Bordered with `#4CAF50`, background tint `#E8F5E9`, featuring an apple core or green leaf pictogram.
- **Anorganik Bin:** Bordered with `#29B6F6`, background tint `#E1F5FE`, displaying a plastic bottle and soda can pictogram.
- **B3 Bin:** Bordered with `#FF5252`, background tint `#FFEBEE`, featuring an alert triangle and battery pictogram.
- **Drop / Drag-Over Target:** On hover or active drag-over, the bin scales up 1.05x with a playful jiggle and an amplified 4px dashed highlight border.

### 3. Life & Energy Heart Meter (Meter Nyawa)
- A pill-shaped container with a soft cream background (`#FFF9E6`) and a 2px outline in `#E0DACB`.
- Contains 3 to 5 heart glyphs. Active hearts are rendered in vibrant ruby red (`#FF5252`) with white specular highlights; lost lives appear as soft grey outlines (`#CFD8DC`).

### 4. Game Scoreboard & Combo Tracker (Papan Skor)
- Pill-shaped chip badge carrying a sparkling star coin icon in `#FFD54F`.
- Displays numeric points in `label-lg` (700 weight).

### 5. Dialog & Victory Modal Cards (Kartu Dialog Juara)
- Built on a pure white surface with a 4px decorative perimeter border in `#FFD54F` or `#4CAF50`.
- Includes bubbly floating decorative clouds and character badges overlapping the top card boundary.
- Houses prominent "Main Lagi" (Play Again) and "Lanjut Petualangan" (Continue) primary buttons stacked with generous spacing (`space-md`).
