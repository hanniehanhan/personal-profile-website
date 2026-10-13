---
name: Modern Minimalist Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#4e565d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676e76'
  on-tertiary-container: '#eaf1fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system targets high-caliber creative technologists, product designers, and senior engineers seeking an understated yet razor-sharp digital presence. The aesthetic blends modern minimalism with quiet editorial polish.

- **Tone & Mood:** High-clarity, confident, deliberate, and calm. It values whitespace and semantic structure over decorative noise.
- **Design Style:** Modern Precision Minimalism. The interface utilizes structured layouts, subtle low-contrast boundaries, deliberate typographic scale, and delicate ambient light models rather than overt ornament.

## Colors

The palette establishes an open, luminous baseline with pristine canvas layers and strict slate tonal steps to optimize readability.

- **Canvas & Backgrounds:** The base canvas is pure white (`#FFFFFF`), paired with alternating structural section backgrounds in soft light slates (`#F8FAFC` for secondary bands, `#F1F5F9` for tertiary containers and interactive wells).
- **Typography & Neutrals:** Primary text is rendered in deep charcoal (`#0F172A`), providing AAA-compliant contrast. Secondary body text, subheadings, and metadata use muted slate (`#334155` and `#64748B`).
- **Accents:** Accentuation relies on vivid technical blues. Electric Cobalt (`#2563EB`) commands primary interactive elements, supported by deep royal (`#1D4ED8`) for active states and dynamic highlight blue (`#3B82F6`) for focused badges.
- **Tints & Boundaries:** Subtle soft tints (`#EFF6FF`) fill tags, chips, and active indicator backgrounds. Borders remain whisper-thin and quiet using cool border slate (`#E2E8F0`).

## Typography

Typographic hierarchy relies entirely on standardizing scale and tracking through `Inter`.

- **Letter Spacing Logic:** Large titles require tighter negative tracking (`-0.03em` to `-0.02em`) to maintain optical cohesion at scale. Small technical labels and category caps leverage positive tracking (`+0.01em` to `+0.04em`) to ensure instant legibility.
- **Rhythm:** Body copy enforces an open `1.6` line-height multiplier for comfortable long-form reading across case studies, research logs, and project retrospectives.

## Layout & Spacing

The layout is built around a constrained 12-column grid system capped at a maximum width of `1280px` (`80rem`) to preserve balanced margins on high-resolution displays.

- **Breakpoints:**
  - **Mobile (< 768px):** 4-column layout, `1rem` margins, `1.5rem` gutters. Vertical stack orientation is preferred for project galleries.
  - **Tablet (768px – 1024px):** 8-column layout, `2rem` margins, `1.5rem` gutters.
  - **Desktop (> 1024px):** 12-column layout, `3rem` outer margins, `2rem` column gutters.
- **Vertical Rhythm:** Sections are separated by expansive vertical spacing (`space-2xl` to `space-3xl`) to provide natural breathing room between thematic case studies, experience timelines, and contact blocks.

## Elevation & Depth

Visual hierarchy avoids heavy drop shadows, instead using layered surfaces with ambient, slate-tinted diffusion combined with delicate perimeter strokes.

- **Flat/Ground:** Canvas surfaces sit directly at base level without depth artifacts.
- **Low Elevation (Resting Cards):** Uses a structural hairline border (`1px solid #E2E8F0`) paired with an ultra-soft ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 4px 6px -2px rgba(15, 23, 42, 0.02)`.
- **Hover/Interactive Elevation:** On hover, surfaces subtly rise along the Y-axis (`translateY(-2px)`) while expanding the shadow envelope to `0 12px 24px -6px rgba(15, 23, 42, 0.06), 0 4px 8px -2px rgba(15, 23, 42, 0.02)`, and darkening the boundary stroke to `#CBD5E1`.
- **Overlay/Nav Bar:** Sticky headers utilize a translucent frosted surface (`background: rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)`) separated by an underside hairline border (`1px solid #F1F5F9`).

## Shapes

The interface balances sharp digital precision with organic softness via a mid-level roundedness (`roundedness: 2`).

- **Standard Elements (0.5rem / 8px):** Input fields, inline badges, standard cards, and dropdown containers use `rounded`.
- **Feature Cards & Modals (1rem / 16px):** Featured showcase work and case study preview containers use `rounded-lg`.
- **Pill Elements:** Interactive status badges, selected topic tags, and primary action buttons adopt full pill profiles (`rounded-full` / `9999px`) to create clear touch points against rectilinear layout grids.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, font `label-md`. Height `40px` (or `48px` for hero CTAs), horizontal padding `space-lg`, pill shape (`rounded-full`). Hover shifts background to `#1D4ED8` with a micro-lift. Active scale down to `0.98`. Focus outline: `2px solid #2563EB` offset by `2px`.
- **Secondary / Outline:** Background `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F172A`. Hover transitions background to `#F8FAFC` and border to `#CBD5E1`.
- **Ghost:** Background transparent, text `#334155`. Hover transitions to `#F1F5F9` text `#0F172A`.

### Cards & Project Showcase
- **Case Study Card:** Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `rounded-lg` (`16px`), inner padding `space-lg`. Media containers inside cards carry a recessed `rounded` (`8px`) finish and subtle `1px solid #F1F5F9` border.
- **Hover Behavior:** Smooth `200ms ease-out` transition affecting subtle Y-offset (`-2px`), ambient shadow expansion, and slight accent color shift on the title link (`#0F172A` to `#2563EB`).

### Chips & Badges
- **Skill / Tech Stack Chip:** Background `#EFF6FF`, text `#2563EB`, border `1px solid rgba(37, 99, 235, 0.1)`, typography `label-sm`, padding `space-xs space-sm`, radius `rounded-full`.
- **Neutral Tag:** Background `#F1F5F9`, text `#475569`, border `transparent`, radius `rounded-full`.

### Input Fields
- **Text Fields:** Height `44px`, background `#FFFFFF`, border `1px solid #E2E8F0`, padding `0 space-md`, text `body-md`, radius `rounded` (`8px`).
- **States:** Focus replaces border with `#2563EB` and adds a soft ring (`box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12)`). Placeholder color `#94A3B8`.

### Checkboxes & Radios
- Size `18px`, border `1.5px solid #CBD5E1`, background `#FFFFFF`. Selected state switches to `#2563EB` fill with white checkmark icon, accompanied by smooth scaling animation.

### Lists & Experience Timeline
- **Timeline Item:** Connected by a minimal `1px solid #E2E8F0` vertical stem. Node indicators are `8px` solid circular dots (`#2563EB` on active, `#CBD5E1` on past events). Typography cleanly pairs dates in `label-sm` slate text with company and role in `headline-sm`.