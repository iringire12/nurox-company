# Nurox - AI SaaS & Digital Company Website

A modern, responsive AI SaaS website built with React and Tailwind CSS, inspired by the Nurox Elementor template kit.

## Features

- **Modern Design**: Clean, professional interface with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Accessible**: Semantic HTML5 with proper ARIA labels
- **Fast Performance**: Optimized code with lazy loading and efficient rendering

## Sections

- **Hero Section**: Eye-catching landing with AI dashboard preview
- **Features**: Showcase of AI capabilities with icon cards
- **Services**: Detailed service offerings with process workflow
- **Pricing**: Tiered pricing plans with FAQ
- **About**: Company story, team, and values
- **Contact**: Contact form with multiple contact methods

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Modern JavaScript**: ES6+ features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nurox
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build will be created in the `build` folder.

## Project Structure

```
nurox/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── Services.js
│   │   ├── Pricing.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. You can customize the primary, secondary, and dark color variants.

### Fonts

The project uses the Inter font family from Google Fonts. You can change this in the `public/index.html` file.

### Components

Each section is a separate React component in the `src/components/` folder. You can modify or add new components as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.
