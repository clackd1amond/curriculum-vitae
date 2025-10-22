# 👨‍💻 Curriculum Vitae

My personal portfolio and CV website built with modern web technologies. A sleek, interactive showcase of my journey as a developer.

## ✨ Features

- **🎨 Modern Design** - Clean, minimalist interface with smooth animations
- **🌓 Dark Mode** - Seamless theme switching with system preference detection
- **🌍 Multilingual** - Full internationalization support (English/Ukrainian) with SEO-optimized URL routing
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **⚡ Lightning Fast** - Built with Next.js 15 for optimal performance
- **🎯 Interactive UI** - Engaging hover effects and smooth scroll navigation
- **🎭 Easter Eggs** - Hidden surprises for curious visitors

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) (URL-based routing)
- **Package Manager:** [bun](https://bun.sh)
- **Language:** TypeScript

## 📂 Project Structure

```
curriculum-vitae/
├── app/
│   ├── [locale]/          # Localized routes (en, uk)
│   │   ├── page.tsx       # Main page
│   │   └── layout.tsx     # Localized layout
│   ├── sitemap.ts         # SEO sitemap with i18n
│   ├── robots.ts          # Robots.txt configuration
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── ui/                # Reusable UI components
│   └── stack/             # Technology stack icons
├── i18n/
│   ├── routing.ts         # i18n routing configuration
│   ├── request.ts         # Server-side i18n setup
│   └── navigation.ts      # Localized navigation helpers
├── messages/              # Translation files
│   ├── en.json            # English translations
│   └── uk.json            # Ukrainian translations
├── assets/                # Images and static assets
└── lib/                   # Utility functions
```

## 🎨 Customization

The project uses custom CSS utilities and Tailwind configuration for unique design elements:

- **Custom patterns** - Dots, lines, and diagonal patterns
- **Gradient animations** - Smooth color transitions
- **Edge styling** - Consistent border and decoration system
- **Scroll behavior** - Custom scroll padding for sticky header

## 🌐 Internationalization

The site supports multiple languages with proper SEO optimization:

- **URL-based routing** - `/` for English (default), `/uk` for Ukrainian
- **Automatic locale detection** - Based on browser preferences
- **SEO-friendly** - Includes `hreflang` tags, localized sitemap, and proper metadata
- **Easy to extend** - Add new languages by creating translation files in `/messages`

### Environment Setup

Create a `.env.local` file with your site URL for proper SEO metadata:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

Feel free to reach out or check my work:

- [**Portfolio**](https://eugene.malovnycha.com)
- [**GitHub**](https://github.com/clackd1amond)
- [**LinkedIn**](https://linkedin.com/in/eugene-norm/)

---

**Built with 💛💙 by Yevhen**
