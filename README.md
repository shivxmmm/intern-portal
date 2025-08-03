
# 🧑‍💻 Intern Portal

An all-in-one Intern Portal that provides login/signup, reward tracking, and a modular backend architecture. This project is a full-stack web application built with Java (Spring Boot) on the backend and HTML/CSS/JS for the frontend.

## 🚀 Project Overview

**Frontend:** Static website with responsive design  
**Backend:** Java Spring Boot APIs with RESTful architecture  
**Deployment:** Hosted on Railway (or Render)  
**Purpose:** Built to manage intern data and simulate a basic login/reward system for demo purposes.

---

## 🌐 Features

### ✅ Frontend
- Landing page with login/signup
- Rewards/Unlockables section (static UI)
- Clean, responsive UI using basic HTML/CSS

### ✅ Backend
- REST API to manage intern details
- Endpoints like `/api/intern/details`
- Supports JSON input/output
- Configured with `application.properties`

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | HTML, CSS, JavaScript |
| Backend    | Java, Spring Boot  |
| Deployment | Railway / Render   |
| Version Control | Git, GitHub   |

---

## 📁 Folder Structure

```bash
intern-portal/
├── backend/
│   └── src/main/java/com/example/internportal/
│       ├── controller/
│       ├── service/
│       ├── model/
│       └── InternPortalApplication.java
├── frontend/
│   └── index.html
│   └── login.html
│   └── rewards.html
├── application.properties
├── README.md
└── Screenshots/
```

---

## ⚙️ Setup Instructions

### 🖥️ Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shivxmmm/intern-portal.git
   cd intern-portal
   ```

2. **Backend (Spring Boot)**
   - Open in IntelliJ IDEA or VS Code.
   - Set environment variable `PORT=8080` (or as per Railway).
   - Run the project using:
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Frontend**
   - Open the `frontend/` folder.
   - You can use VS Code Live Server or simply open `index.html` in browser.

---

## ☁️ Deployment

### Railway (Recommended)
1. Connect GitHub repo.
2. Add `application.properties` and expose environment variables:
   ```
   spring.application.name=InternPortal
   server.port=${PORT:8080}
   ```
3. Railway auto-detects Spring Boot.
4. Redeploy and ensure logs show `Tomcat started...`.

> Note: Make sure `.mvnw` has execute permissions:
```bash
chmod +x mvnw
```

---

## 🔗 API Endpoints

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| GET    | `/api/intern/details` | Get intern details         |
| POST   | `/api/intern/add`     | Add a new intern           |

---

## 📸 Screenshots

| UI Page | Preview |
|--------|---------|
| Landing Page | ![Screenshot 1](./Screenshots/Screenshot%20(71).png) |
| Rewards Page | ![Screenshot 2](./Screenshots/Screenshot%20(72).png) |

---

## ✨ Future Enhancements

- Dynamic rewards system with backend
- Admin panel for managing interns
- Authentication + JWT integration
- Deployment on custom domain

---

## 🙋‍♂️ Author

**Shivam Kakade**  
GitHub: [shivxmmm](https://github.com/shivxmmm)  
Currently seeking internship opportunities in Java Full Stack Development!

---

## 📜 License

This project is licensed under the MIT License.
