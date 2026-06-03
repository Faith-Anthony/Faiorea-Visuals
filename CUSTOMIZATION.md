# 📝 Content & Customization Guide

This guide shows you exactly where and how to customize your Faiorea Visuals website.

## 🎯 Quick Edit Locations

### 1. Brand & Global Content
**File**: `src/utils/constants.ts`

```typescript
// ✏️ Update these fields:
BRAND_INFO = {
  name: 'Faiorea Visuals',           // ← Your brand name
  tagline: 'Authentic. Creative. Unforgettable.',
  description: '...',
  vision: '...',
  mission: '...'
}

NAVIGATION_LINKS = [
  { label: 'Home', href: '#home' },   // ← Edit navigation
  { label: 'About', href: '#about' },
  // ...
]

SOCIAL_LINKS = {
  instagram: 'https://instagram.com/youraccount',  // ← Your socials
  tiktok: 'https://tiktok.com/@youraccount',
  email: 'your-email@example.com'
}
```

### 2. Statistics (Social Proof Section)
**File**: `src/components/sections/SocialProofSection.tsx`

```typescript
// Find this section and update values:
const STATS: Stat[] = [
  { label: 'Projects Completed', value: 0 },   // ← Change to 50
  { label: 'Happy Clients', value: 0 },        // ← Change to 30
  { label: 'Events Covered', value: 0 },       // ← Change to 100
  { label: 'Content Produced', value: 0 },     // ← Change to 250
];
```

### 3. Services
**File**: `src/utils/constants.ts`

```typescript
export const SERVICES = [
  {
    id: 1,
    title: 'Videography',              // ← Service name
    description: 'Professional video capture...',  // ← Description
    icon: '🎬',                        // ← Emoji icon
  },
  // ... more services
];
```

### 4. Process Steps
**File**: `src/utils/constants.ts`

```typescript
export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Discovery',                // ← Step title
    description: 'Tell us about your project.',  // ← Description
  },
  // ... 4 steps total
];
```

### 5. Featured Projects
**File**: `src/components/sections/ProjectsPreviewSection.tsx`

```typescript
const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    category: 'Weddings',              // ← Project category
    title: 'Sarah & Michael',          // ← Project title
    description: 'Cinematic wedding...',  // ← Description
    image: 'https://images.unsplash.com/...',  // ← Real image URL
    instagramLink: 'https://instagram.com/...',  // ← Your post link
  },
  // Add more projects here
];
```

### 6. Package Categories
**File**: `src/utils/constants.ts`

```typescript
export const PACKAGE_CATEGORIES = [
  { id: 1, name: 'Weddings' },
  { id: 2, name: 'Church Programs' },
  // ... customize categories
];
```

### 7. FAQ Questions & Answers
**File**: `src/utils/constants.ts`

```typescript
export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How do bookings work?',         // ← Your question
    answer: 'Contact us through the booking...',  // ← Your answer
  },
  // Add more FAQ items
];
```

### 8. Testimonials
**File**: `src/components/sections/TestimonialsSection.tsx`

```typescript
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    clientName: 'Real Client Name',         // ← Client name
    clientPosition: 'CEO / Company Name',   // ← Their position
    clientImage: 'https://...',             // ← Their photo
    review: 'Amazing work! Really professional...',  // ← Their review
    rating: 5,                              // ← Star rating (1-5)
  },
  // Add more real testimonials
];
```

## 🎨 Styling Updates

### Colors
**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'primary-black': '#111111',    // ← Main dark color
      'soft-gold': '#D4AF37',        // ← Accent color
      'light-grey': '#F5F5F5',       // ← Light text color
    },
  },
},
```

### Fonts
**File**: `src/app/globals.css` and `tailwind.config.js`

Update font family if needed (currently uses system sans-serif).

### Spacing & Sizes
**File**: `tailwind.config.js`

```javascript
spacing: {
  '18': '4.5rem',  // ← Custom spacing
  '22': '5.5rem',
},
fontSize: {
  'display': ['3.5rem', { lineHeight: '1.1' }],  // ← Display text
  'title': ['2.5rem', { lineHeight: '1.2' }],    // ← Title text
},
```

## 🔧 Component-Level Customization

### Navbar
**File**: `src/components/Navbar.tsx`

```typescript
// Change logo text:
<Link href="/" className="text-2xl font-bold text-soft-gold">
  FAIOREA  {/* ← Change this */}
</Link>

// Change CTA button text:
<motion.button className="...">
  {CTA_BUTTON}  {/* ← Defined in constants.ts */}
</motion.button>
```

### Hero Section
**File**: `src/components/sections/HeroSection.tsx`

```typescript
// Update main heading:
<h1 className="...">
  <span className="text-white">Capturing Stories</span>
  <br />
  <span className="...">That Matter.</span>  {/* ← Change this */}
</h1>

// Update subheading:
<p className="...">
  Videography, storytelling, and creative visuals...  {/* ← Update */}
</p>

// Update button text:
<motion.button>View Projects</motion.button>  {/* ← Change */}
<motion.button>Book a Shoot</motion.button>   {/* ← Change */}
```

### Hero CTA Section
**File**: `src/components/sections/BookAShootCTASection.tsx`

```typescript
// Main heading:
<span className="...">Let's Tell Your Story</span>  {/* ← Change */}

// Buttons:
<motion.button>Book a Shoot Now</motion.button>    {/* ← Change */}
<motion.button>View Our Portfolio</motion.button>  {/* ← Change */}
```

### Footer
**File**: `src/components/Footer.tsx`

```typescript
// Footer sections:
<h3 className="...text-soft-gold">
  {BRAND_INFO.name}  {/* ← Pulls from constants */}
</h3>
```

## 📋 Complete Customization Checklist

### Content Updates
- [ ] Update BRAND_INFO in `constants.ts`
- [ ] Update NAVIGATION_LINKS in `constants.ts`
- [ ] Update SERVICES in `constants.ts`
- [ ] Update PROCESS_STEPS in `constants.ts`
- [ ] Update PACKAGE_CATEGORIES in `constants.ts`
- [ ] Update FAQ_ITEMS in `constants.ts`
- [ ] Update SOCIAL_LINKS in `constants.ts`
- [ ] Add real projects in `ProjectsPreviewSection.tsx`
- [ ] Add real testimonials in `TestimonialsSection.tsx`
- [ ] Update statistics in `SocialProofSection.tsx`

### Design Customization
- [ ] Update colors in `tailwind.config.js` if needed
- [ ] Adjust font sizes in `tailwind.config.js` if needed
- [ ] Update hero section images
- [ ] Update project gallery images
- [ ] Add client testimonial images

### Deployment
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Set up domain
- [ ] Configure analytics
- [ ] Test on mobile devices
- [ ] Deploy to Vercel or hosting provider

## 🚀 Advanced Customization

### Add New Section
1. Create new file: `src/components/sections/NewSection.tsx`
2. Import Framer Motion, animation variants
3. Add to `src/app/page.tsx` imports
4. Include in JSX

### Add New Navigation Link
1. Add to `NAVIGATION_LINKS` in `constants.ts`
2. Create corresponding section or page

### Change Animation Style
1. Edit animation variants in `src/utils/animations.ts`
2. Update components using those variants

### Add Forms
1. Create form component in `src/components/`
2. Add API route in `src/app/api/`
3. Handle submission

## 📸 Image Optimization

### Project Images
- Recommended: 1200x800px JPG/WebP
- Use https://tinypng.com to compress

### Client Photos
- Recommended: 150x150px JPG/WebP
- Square aspect ratio

### Background Images
- Use responsive images
- Consider lazy loading for performance

## 🔗 External Links to Update

### Social Links
- Instagram: `https://instagram.com/your-handle`
- TikTok: `https://tiktok.com/@your-handle`
- Email: `your-email@faioreavisuals.com`

### Project Links
- Each project card can link to Instagram post
- Update in `ProjectsPreviewSection.tsx`

### External Resources
- Portfolio website link (if separate)
- YouTube channel (if applicable)
- Other relevant links

## ✨ Best Practices

1. **Keep Content Updated**: Refresh projects and testimonials regularly
2. **Optimize Images**: Compress before uploading
3. **Test Changes**: Always test on mobile after updates
4. **Backup**: Keep backup of working version
5. **Use Real Content**: Replace all placeholder text with real content before launch
6. **Check Links**: Verify all social links and external links work

## 🎯 Priority Updates Before Launch

1. **MUST**: Replace placeholder testimonials with real client reviews
2. **MUST**: Add real project images to gallery
3. **MUST**: Update contact email and social links
4. **MUST**: Update statistics with real numbers
5. **SHOULD**: Add FAQ questions relevant to your business
6. **SHOULD**: Update service descriptions if needed
7. **NICE**: Adjust colors if not matching brand exactly

---

Need help? Refer to the README.md and SETUP.md files for more information!
