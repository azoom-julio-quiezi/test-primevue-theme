# PrimeVue Test Project with Custom Components

This is a test project showcasing custom PrimeVue components and themes. It demonstrates various Azoom components custom including breadcrumbs, labels, links, dialogs, and form elements with a custom design system.

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (package manager) - This will be installed automatically if you don't have it

### Installation Steps

1. **Open Terminal/Command Prompt**
   - On Mac: Press `Cmd + Space`, type "Terminal", and press Enter
   - On Windows: Press `Win + R`, type "cmd", and press Enter
   - On Linux: Press `Ctrl + Alt + T`

2. **Navigate to the Project Folder**
   ```bash
   cd /path/to/your/project
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Start the Development Server**
   ```bash
   pnpm run dev
   ```

5. **Open Your Browser**
   - The application will automatically open in your default browser
   - If it doesn't, manually go to: `http://localhost:3000`

## 📱 What You'll See

The demo page showcases various components:

### 🍞 Breadcrumb Component
- Shows navigation paths like "Home > Products > Electronics"
- Customizable home icon and labels

### 🏷️ Label Component
- Form labels with different sizes (small, normal, large)
- Required field indicators
- Different styling variants

### 🔗 Link Component
- Different link styles (primary, text, traditional)
- External link indicators
- Various sizes and colors

### 🔘 Button Components
- Multiple button styles (filled, outlined, text, link)
- Different colors (primary, secondary, success, warning, danger)
- Various sizes (small, normal, large)
- Buttons with icons

### 📊 Input Number Component
- Number input with formatting
- Currency input with USD formatting
- Percentage input with suffix
- Range-limited inputs

### 💬 Dialog Components
- Basic dialogs with custom close buttons
- Form dialogs with input fields
- Modal dialogs that overlay the page

### ✅ Confirm Dialog Component
- Confirmation dialogs for different actions
- Different severity levels (info, success, danger)

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run generate` | Generate static site |

## 📁 Project Structure

```
test-primevue-theme/
├── components/          # Custom components
│   ├── az/             # AZ design system components
│   │   ├── breadcrumb/ # Breadcrumb component
│   │   ├── dialog/     # Dialog component
│   │   ├── label/      # Label component
│   │   └── link/       # Link component
├── assets/
│   ├── styles/         # CSS styles
│   └── themes/         # Custom themes
├── pages/              # Demo pages
└── plugins/            # Vue plugins
```

## 🎨 Custom Components

### AzBreadcrumb
- **Usage**: `<az-breadcrumb :model="items" />`
- **Features**: Custom home icon, navigation paths

### AzLabel
- **Usage**: `<az-label label="Field Name" required />`
- **Features**: Different sizes, required indicators

### AzLink
- **Usage**: `<az-link label="Click me" href="/path" />`
- **Features**: Multiple styles, external link support

### AzDialog
- **Usage**: `<az-dialog v-model:visible="show" header="Title">`
- **Features**: Custom close button, modal support

### AzConfirmDialog
- **Usage**: Triggered programmatically
- **Features**: Different severity levels, customizable messages

## 🔧 Troubleshooting

### Common Issues

**"Command not found: pnpm"**
- Install pnpm: `npm install -g pnpm`

**"Port 3000 is already in use"**
- The server will automatically try the next available port
- Or manually specify: `pnpm dev --port 3001`

**"Module not found" errors**
- Delete `node_modules` folder and `pnpm-lock.yaml`
- Run `pnpm install` again

**Browser shows blank page**
- Check the browser console for errors (F12)
- Make sure you're visiting the correct URL

### Getting Help

If you encounter any issues:

1. Check the terminal output for error messages
2. Look at the browser console (F12) for JavaScript errors
3. Make sure all dependencies are installed correctly
4. Try clearing your browser cache

## 📝 Notes

- This project uses **Nuxt 3** as the framework
- **PrimeVue 4** provides the base UI components
- **Custom AZ theme** provides the styling
- **pnpm** is used for package management (faster than npm)

## 🎯 Next Steps

Once you have the project running:

1. **Explore the Components**: Click through different sections to see all available components
2. **Try the Interactive Demo**: Fill out the form at the bottom of the page
3. **Check the Code**: Look at the files in the `components/` folder to understand how components are built
4. **Modify Components**: Try changing colors, text, or adding new features

Happy exploring! 🚀
