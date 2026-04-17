# AIventra Hackathon Website - Project Themes & Details

## Project Overview
- **Project Name:** AIventra Hackathon Website
- **Organizer:** HackHere
- **Core Technologies:** React, Vite, Framer Motion, Custom Vanilla CSS
- **Design Aesthetic:** Futuristic, dark-themed, cinematic, zero-gravity space environment, high-depth 3D-interactive design.

## Thematic Elements
- **Space & Zero-Gravity:** The website is designed around a space exploration theme. It features a starfield background, a 3D animated rocket that follows a zigzag path during scrolling, and a custom 3D earth cursor with a trail.
- **Planetary System:** Event details are conceptualized as a planetary system with a central "prize pool" planet and orbiting parameter cards.
- **Interactive UI:** Heavy use of micro-animations, glassmorphism, glowing accents, 3D-tilt cards, and hover-activated spinning rings (especially in the Team section).

## Website Structure & Sections
1. **Navbar:** Transparent, sticky header with links to Home, About, Event, Juries, and Team.
2. **Hero Section:** High-impact entrance with reveal animations.
3. **About & Organization:** Details about the AIventra mission and HackHere.
4. **Event Details:** Time, venue (Chennai), duration (24-hour), and other mission parameters arranged in a planetary/orbit layout.
5. **Hackathon Flow:** The journey and rounds of the hackathon.
6. **Challenge Areas:** Domain-specific challenges.
7. **Prizes Section:** Centralized prize pool display.
8. **Space Dock Partners (Sponsors):**
   - **Zoho**
   - **Journi** (Travel Partner)
   - **StartupTN** (Venue Partner - positioned centrally with logo)
   - **Elyon Clothing** (Merchandise Partner)
   - **Wyntrix** (Internship Partner)
9. **Why Join & Experience Zone:** Value propositions and interactive zones.
10. **Juries Section:** 
    - 3 placeholder cards in a single-row grid for upcoming jury announcements.
    - "Apply as Jury" call-to-action button.
11. **Team Section:**
    - Features full-portrait photo cards with cinematic transitions and LinkedIn integrations.
    - Key Members: EZHIL KK, K GURU PRAKASH, RITHIKA S, SHUBAASHREE S.
12. **Final CTA & Footer:** Includes the HackHere logo and social media links (Instagram, Email).

## Recent Conversation & Implementation Details
- **Sponsor Update:** Added the `StartupTN` logo (`startuptn.jpeg`) as the central Venue Partner in the Space Dock Partners section, achieving a perfectly balanced 5-item layout (two on the left, one in the middle, two on the right).
- **Juries Implementation:** Created a dedicated `JuriesSection.jsx` component. It was inserted directly above the Team section and added to the Navbar for easy navigation.
- **Troubleshooting:** Fixed an issue where the StartupTN logo was not rendering by correcting the file extension from `.png` to the actual `.jpeg` format saved on the local machine.
