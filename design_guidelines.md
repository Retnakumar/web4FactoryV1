# Web4Factory Design Guidelines

## Brand Identity
- **Company**: Web4Factory
- **Tagline**: "Intelligence Meets Innovation — in Every Block, Empowering the Web Beyond 3.0"
- **Theme**: Modern, Elegant, Futuristic, Professional
- **Core Concept**: Next evolution of the web integrating AI, Blockchain, and IoT into Web4: The Symbiotic Web

## Color Palette

### Primary Colors
- **Deep Space Navy**: 220 70% 15% (primary background)
- **Pure Black**: 0 0% 5% (deep sections)
- **Electric Violet**: 270 80% 60% (accents and highlights)
- **Cosmic Purple**: 260 60% 40% (secondary accents)

### Gradients
- Hero backgrounds: Navy to black with violet highlights
- Card overlays: Transparent to deep navy
- Glow effects: Electric violet with reduced opacity

## Typography
- **Headlines**: Modern futuristic sans-serif fonts (e.g., "Orbitron", "Exo 2", "Rajdhani")
- **Body Text**: Clean, readable sans-serif (e.g., "Inter", "Space Grotesk")
- **Sizes**: Hero headlines 3.5rem+, section headers 2.5rem, body 1rem
- **Weight Distribution**: Bold for headlines (700), medium for subheadings (500), regular for body (400)

## Layout System
- **Spacing Units**: Use 8px base grid (8px, 16px, 24px, 32px, 48px, 64px, 96px)
- **Container Max Width**: 1200px for content, full-width for hero sections
- **Grid System**: CSS Grid for services/blog cards (3 columns desktop, 2 tablet, 1 mobile)
- **Section Padding**: py-20 to py-32 for desktop, py-12 to py-16 for mobile

## Component Library

### Navigation Header
- Fixed/sticky header with logo on left
- Horizontal navigation links (Home, About, Services, Contact, Blog, FAQ)
- Subtle backdrop blur effect
- Smooth transitions on scroll
- Mobile: Hamburger menu with slide-in panel

### Hero Section (Home Page)
- Full viewport height with deep space gradient background
- Centered tagline with futuristic glow effect
- Prominent "Explore Web4" CTA button with electric violet glow
- Subtle animated gradient or particle effect background
- **Hero Image**: Abstract futuristic tech visualization with AI/blockchain/IoT elements merged, featuring circuit patterns, neural networks, and glowing nodes on dark space background

### Three Pillars Section
- 3-column grid layout (AI, Blockchain, IoT)
- Icon above each pillar with violet glow effect on hover
- Brief description under each
- Rounded cards with subtle borders and hover lift effect

### Services Grid
- 4 service cards in responsive grid
- Each card: Icon, title, brief description, "Learn More" button
- Hover effects: Glow border, slight scale transform, background gradient shift
- Rounded corners (12px-16px)

### Contact Form
- Clean, centered form layout
- Input fields with glowing focus states (violet border)
- Rounded input fields with dark backgrounds
- Submit button with gradient and hover glow
- Form fields: Name, Email, Message (textarea)

### Blog/Portfolio Cards
- 3-column masonry or grid layout
- Card image at top with gradient overlay
- Title and excerpt on hover reveal
- Smooth hover animations with scale and glow
- "Read More" link in electric violet

### FAQ Accordion
- CSS-based accordion with smooth transitions
- Question headers with + icon that rotates to × when open
- Subtle glow on active/open items
- Clean typography with adequate spacing

### Testimonials
- 3-4 testimonial cards with client quotes
- Subtle card glow effect
- Client name and company in smaller text
- Rounded avatar placeholders with violet ring

### Footer
- Multi-column layout (Company info, Quick links, Social, Contact)
- Social media icons with hover glow
- Copyright and legal links
- Consistent with header styling

## Visual Effects

### Glow Effects
- Primary glow: Electric violet with 20px blur, 40% opacity
- Hover states: Increased glow intensity
- Focus states: Violet ring with outer glow

### Transitions
- Standard duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Hover transforms: scale(1.05) or translateY(-4px)
- All interactive elements have smooth transitions

### Rounded Corners
- Cards: 16px border radius
- Buttons: 8px border radius
- Input fields: 8px border radius
- Images: 12px border radius

## Images

### Hero Image
- **Location**: Home page hero section as background
- **Description**: Abstract futuristic visualization showing interconnected AI neural networks, blockchain chains, and IoT device nodes in deep space with glowing electric violet connections

### Service Icons
- **Style**: Line-art icons with futuristic aesthetic, violet stroke color
- **Size**: 64px × 64px
- **Subjects**: AI brain/circuit, blockchain chain/blocks, IoT connected devices, data analytics graphs

### Blog/Portfolio Images
- **Style**: Tech-themed imagery with deep colors
- **Aspect Ratio**: 16:9 or 4:3
- **Treatment**: Slight gradient overlay for text readability

## Responsive Behavior
- **Desktop (1200px+)**: 3-column grids, full navigation
- **Tablet (768px-1199px)**: 2-column grids, condensed spacing
- **Mobile (<768px)**: Single column, hamburger menu, stacked sections
- All text scales appropriately with viewport
- Touch-friendly button sizes (minimum 44px height)

## Accessibility
- Semantic HTML5 elements throughout
- ARIA labels for interactive elements
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Focus indicators visible with violet glow

## SEO & Meta
- Descriptive page titles with "Web4Factory" suffix
- Meta descriptions for all pages (150-160 characters)
- Open Graph tags for social sharing
- Favicon with Web4Factory logo/mark
- Structured data for organization and services