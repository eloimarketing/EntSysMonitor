# EntSysMonitor Landing Page

A fully animated, mobile-first React.js landing page for EntSysMonitor (ESM) – Enterprise System Monitoring & Alerting platform.

## 🚀 Features

### Animations & Interactions
- **Framer Motion** powered animations throughout
- Logo animation on page load
- Navigation links slide in from top
- Mobile menu with smooth expand/collapse
- Hero section with staggered animations
- Animated counters that count from 0 to final values
- Feature cards with hover effects and staggered animations
- Interactive dashboard preview with live metrics
- Pricing cards with hover effects and glow
- Contact form with sequential field animations
- Smooth scrolling navigation

### Design & UX
- **Mobile-first responsive design**
- **Dark mode support** (toggle + auto-detect)
- Modern SaaS aesthetic with rounded corners and gradients
- Glass morphism effects
- Hover animations and micro-interactions
- Beautiful typography with Inter font
- Consistent color scheme and spacing

### Sections
1. **Animated Header & Navigation** - Fixed header with logo, navigation, and dark mode toggle
2. **Hero Section** - Full-screen mobile design with CTA buttons and dashboard preview
3. **Stats Section** - Animated counters with industry recognition
4. **Features Section** - 12 feature cards with icons and descriptions
5. **Dashboard Preview** - Interactive dashboard mockup with live metrics
6. **Pricing Section** - Three pricing tiers with monthly/yearly toggle
7. **Contact Section** - Contact form with company information
8. **Footer** - Comprehensive footer with links and newsletter signup

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EntSysMonitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Purple gradient (`#d946ef` to `#c026d3`)

### Content
All text content is easily replaceable in the component files:
- Company name: "EntSysMonitor" / "ESM"
- Contact information
- Pricing plans and features
- Statistics and metrics

### Animations
Reusable animation components are available in `src/components/AnimatedComponents.jsx`:
- `FadeIn` - Fade in animation
- `SlideUp` - Slide up from bottom
- `SlideDown` - Slide down from top
- `ScaleIn` - Scale in animation
- `StaggerContainer` - Container for staggered animations
- `HoverScale` - Hover scale effect
- `AnimatedCounter` - Count up animation
- `AnimatedProgressBar` - Progress bar animation

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 🌙 Dark Mode

Dark mode is supported with:
- **Auto-detection** of system preference
- **Manual toggle** in the header
- **Smooth transitions** between modes
- **Consistent theming** across all components

## 🚀 Performance

- **Optimized animations** with Framer Motion
- **Lazy loading** for better performance
- **Efficient re-renders** with React best practices
- **Minimal bundle size** with Vite

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: support@entsysmonitor.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for enterprise system monitoring 