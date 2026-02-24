## 📁 Project Files

### 📂 Source Code Structure

**📄 Main Components:**
- [`src/App.jsx`](src/App.jsx) - Root application component
- [`src/main.jsx`](src/main.jsx) - Application entry point

**🧩 Application Components:**
- [`src/componetnts/NoteApp.jsx`](src/componetnts/NoteApp.jsx) - Main note application logic
- [`src/componetnts/Note.jsx`](src/componetnts/Note.jsx) - Individual note component
- [`src/componetnts/ColorButtons.jsx`](src/componetnts/ColorButtons.jsx) - Color picker component

**🎨 Styling:**
- [`src/styles/note.module.css`](src/styles/note.module.css) - Main application styles
- [`src/styles/colorButtons.module.css`](src/styles/colorButtons.module.css) - Color button styles

**⚙️ Configuration:**
- [`package.json`](package.json) - Dependencies and scripts
- [`vite.config.js`](vite.config.js) - Vite build configuration
- [`.gitignore`](.gitignore) - Git ignore rules

---

## 🚀 Quick Start

```bash
# Clone this repository
git clone https://github.com/negar-younesi/Note-App.git

# Navigate to project
cd Note-App

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📱 Live Demo

👉 [View Live Application](https://your-app-url-here.com)

---

## 📋 Features

- ✨ Create colorful notes with custom text
- 🎨 Choose from a vibrant color palette
- 📱 Fully responsive design for all devices
- ⚡ Add notes with Enter key support
- 🔄 Auto-focus on input after every action
- 🗑️ Delete notes with a single click
- 🎯 Smooth animations and hover effects
- 🎨 Modern UI with clean design

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **CSS Modules** - Scoped styling
- **React Icons** - Beautiful icon library
- **UUID** - Unique identifier generation

## Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd noteApp

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Create Note**: Type your text and press `+` button or hit `Enter`
2. **Choose Color**: Select your preferred color from the palette before creating
3. **Delete Note**: Click on any note to remove it
4. **Clear Form**: Use the eraser button to reset input and color

## Project Structure

```
src/
├── components/
│   ├── NoteApp.jsx      # Main application component
│   ├── Note.jsx         # Individual note component
│   └── ColorButtons.jsx # Color picker component
├── styles/
│   ├── note.module.css      # Main styles
│   └── colorButtons.module.css # Color button styles
├── App.jsx             # Root component
└── main.jsx            # Entry point
```

## Responsive Design

Optimized for three main screen sizes:

- **Desktop** (>768px): Full-featured experience
- **Tablet** (≤768px): Medium sizes with compact layout
- **Mobile** (≤480px): Compact design with smaller elements

## Technical Features

- **React Hooks**: useState, useRef for state management
- **Event Handling**: Complete keyboard and mouse event support
- **CSS Responsive**: Media queries for all screen sizes
- **Component Architecture**: Modular and extensible structure
- **Performance**: Optimized with React keys and efficient rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Demo

[Live Demo](http://localhost:5173) - Available after running `npm run dev`

---

Built with ❤️ and React
