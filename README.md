# LinkStack - The Smart Link Hub

[![Screenshot-2025-06-15-161354.png](https://i.postimg.cc/ncj5pTfx/Screenshot-2025-06-15-161354.png)](https://postimg.cc/zVNpkCf2)

A Linktree-style personal link management app tailored for developers, business'es, creators, featuring built-in analytics, theme customization, and responsive layouts.

## ✨ Features

- **Custom Profile URL** (e.g., `yourdomain.com/username`)
- **Real-time Analytics** (track link clicks & profile views)
- **Theme Customization** (colors, dark/light mode)
- **Multiple Layouts** (vertical, grid, card styles)
- **Social Media Integration**
- **Mobile Responsive**

## ✨ Landing Page
[![screencapture-localhost-5173-2025-06-15-16-14-25.png](https://i.postimg.cc/52PnzCVg/screencapture-localhost-5173-2025-06-15-16-14-25.png)](https://postimg.cc/ZWd8t00v)

## 🖥️ Screenshots
| Profile Page | Dashboard |
|--------------|-----------|
| [![Screenshot-2025-06-15-161151.png](https://i.postimg.cc/6qTP7f7d/Screenshot-2025-06-15-161151.png)](https://postimg.cc/rRXj3WNm) | [![Screenshot-2025-06-15-161123.png](https://i.postimg.cc/6pZDLcMc/Screenshot-2025-06-15-161123.png)](https://postimg.cc/fVw2McnS) |

| Themes | Analytics |
|--------|-------------|
| [![Screenshot-2025-06-15-161231.png](https://i.postimg.cc/mZ6qvJqV/Screenshot-2025-06-15-161231.png)](https://postimg.cc/K4BJLqmg) | [![Screenshot-2025-06-15-161322.png](https://i.postimg.cc/V6fpw8mZ/Screenshot-2025-06-15-161322.png)](https://postimg.cc/PL72b0L1) |


## ❤ Themes
| Emerald | Sky |
|--------------|-----------|
| [![Screenshot-2025-06-15-162927.png](https://i.postimg.cc/KcBkwk0Y/Screenshot-2025-06-15-162927.png)](https://postimg.cc/fkWR0Ln4) | [![Screenshot-2025-06-15-163003.png](https://i.postimg.cc/PrMLrGss/Screenshot-2025-06-15-163003.png)](https://postimg.cc/SJJQDvxD) |

| Mid Night | Cosmos Nebula |
|--------|-------------|
| [![Screenshot-2025-06-15-162850.png](https://i.postimg.cc/DzN4kqVS/Screenshot-2025-06-15-162850.png)](https://postimg.cc/yJF8038K) | [![Screenshot-2025-06-15-163136.png](https://i.postimg.cc/L6SYp9W3/Screenshot-2025-06-15-163136.png)](https://postimg.cc/yWfYhHsD) |


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

Project Link: [https://github.com/aakash-gupta02/LinkStack](https://github.com/aakash-gupta02/LinkStack)
```
