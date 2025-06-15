# LinkStack - The Smart Link Hub

![LinkStack Banner](https://i.imgur.com/JfQ5Y6h.png)

A Linktree-style personal link management app tailored for developers, business'es, creators, featuring built-in analytics, theme customization, and responsive layouts.

## ✨ Features

- **Custom Profile URL** (e.g., `yourdomain.com/username`)
- **Real-time Analytics** (track link clicks & profile views)
- **Theme Customization** (colors, dark/light mode)
- **Multiple Layouts** (vertical, grid, card styles)
- **Social Media Integration**
- **Mobile Responsive**

## 🖥️ Screenshots

| Profile Page | Dashboard |
|--------------|-----------|
| ![Profile](https://i.imgur.com/8G7VvZl.png) | ![Dashboard](https://i.imgur.com/5XwD9kP.png) |

| Themes | Mobile View |
|--------|-------------|
| ![Themes](https://i.imgur.com/KmZQl4E.png) | ![Mobile](https://i.imgur.com/9FbQJYr.png) |

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB

**Deployment:**
- Vercel (Frontend)
- Render (Backend)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/aakash-gupta02/LinkStack.git
```

2. Install dependencies:
```bash
cd LinkStack
npm install
cd backend
npm install
```

3. Set up environment variables:
```bash
# Frontend (.env)
VITE_API_BASE_URL=http://localhost:3000

# Backend (.env)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the development server:
```bash
# Frontend
npm run dev

# Backend
npm start
```

## 📂 Project Structure

```
LinkStack/
├── backend/            # Node.js server
│   ├── controllers/    # Route handlers
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Express server
├── public/             # Static assets
└── src/                # React frontend
    ├── components/     # Reusable UI
    ├── contexts/       # Global state
    └── pages/          # Main views
```

## 🔧 Configuration

Customize in `backend/config.js`:
```javascript
module.exports = {
  CLOUDINARY: {
    cloud_name: 'your_cloud_name',
    api_key: 'your_api_key',
    api_secret: 'your_api_secret'
  },
  // Other configs...
};
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Aakash Gupta - [@aakashdev](https://twitter.com/aakashdev) - aakashgupta.works@gmail.com

Project Link: [https://github.com/aakash-gupta02/LinkStack](https://github.com/aakash-gupta02/LinkStack)
```
