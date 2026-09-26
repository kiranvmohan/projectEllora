# ElloraLives 🏘️

A full-stack community management platform built for apartment/residential communities. ElloraLives lets admins manage residents and post announcements, while residents get a simple portal to stay updated — all backed by role-based authentication.

🔗 **Live Demo:** [ellorafe.netlify.app](https://ellorafe.netlify.app)

---

## ✨ Features

- 🔐 **JWT-based authentication** with role-based access control (Admin vs. Resident)
- 📢 **Announcements system** — admins can post updates visible to all residents
- 👥 **Member management** — add, view, and manage resident accounts
- 📱 **Responsive UI** built with React and Bootstrap
- ☁️ **Production deployment** — frontend on Netlify, backend on render, with proper CORS and environment configuration

---

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB with Mongoose
**Auth:** JSON Web Tokens (JWT)
**Deployment:** Netlify (frontend), Railway (backend)

---

## 📁 Project Structure

```
projectEllora/
├── frontend/          # React application
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/            # Express API server
│   ├── routes/
│   ├── models/
│   ├── package.json
│   └── ...
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB instance)

### 1. Clone the repository
```bash
git clone https://github.com/kiranvmohan/projectEllora.git
cd projectEllora
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:
```bash
npm start
```

### 3. Set up the frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` folder (if your app uses one), e.g.:
```
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm start
```

The app should now be running locally at `http://localhost:3000`.

---

## 👤 Roles

| Role     | Access                                      |
|----------|----------------------------------------------|
| Admin    | Manage residents, post/edit announcements     |
| Resident | View announcements, view own profile          |

---

## 📌 Notes

This project was built independently over 2 months as part of hands-on full-stack development practice, covering everything from UI design to REST API architecture to production deployment.

---

## 📬 Contact

**Kiran V M**
📧 kiranmohanvm@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/kiranmohandas) · [GitHub](https://github.com/kiranvmohan)
