# MEAN Pastry App

A web application for managing a pastry shop, built using the **MEAN stack** (MongoDB, Express.js, Angular, and Node.js).

## 📁 Project Structure

```

MEAN-pastry-app/
│
├── BackendFinalProject/      # Node.js + Express backend
│   ├── src/                  # Backend source code
│   ├── .env                  # Environment variables (Mongo URI, port, etc.)
│   └── package.json
│
├── FinalProject/             # Angular frontend app
│   ├── src/                  # Frontend source code
│   ├── angular.json
│   └── package.json
│
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/EyaZantour/MEAN-pastry-app.git
cd MEAN-pastry-app
````

---

### 2. Set up the Backend

```bash
cd BackendFinalProject
npm install
```

* Create a `.env` file in the root of `BackendFinalProject`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/pastry-shop
```

* Start the server:

```bash
npm start
```

> The backend will run on `http://localhost:3000/`

---

### 3. Set up the Frontend

```bash
cd ../FinalProject
npm install
ng serve
```

> The frontend will run on `http://localhost:4200/`

---

## 🧪 Features

* ✅ Admin dashboard for managing pastry items
* ✅ Customer-facing UI for browsing and ordering
* ✅ API integration between Angular and Express
* ✅ MongoDB database for storing items and orders

---

## 📦 Technologies

* **Frontend**: Angular, TypeScript, HTML/CSS
* **Backend**: Node.js, Express
* **Database**: MongoDB

---

## 🛠️ Author

**Eya Zantour** – [@EyaZantour](https://github.com/EyaZantour)

---

## 📄 License

MIT License – see the [LICENSE](LICENSE) file for details.

```

