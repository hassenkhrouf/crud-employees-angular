# 👨‍💼 Angular Employee Management System

A full-stack Employee Management CRUD application built with **Angular** and deployed to production.

This project demonstrates modern frontend architecture, REST API integration, environment configuration, and cloud deployment.

---

## 🌐 Live Demo

- 🔵 **Frontend (Vercel):** https://crud-employees-angular.vercel.app/
- 🟢 **Backend API (Render):** https://employees-api-ng96.onrender.com/employees

---

## ✨ Features

- ✅ Create new employees
- ✅ View paginated & sortable employee list
- ✅ Update employee details
- ✅ Delete employees
- ✅ Responsive UI using Angular Material
- ✅ RESTful API integration
- ✅ Environment-based configuration (Dev / Production)
- ✅ Cloud deployment (Vercel + Render)

---

## 🛠 Tech Stack

### Frontend

- Angular
- Angular CLI
- Angular Material
- TypeScript
- RxJS
- HTTPClient

### Backend

- JSON Server (Mock REST API)
- Hosted on Render

### Deployment

- Vercel (Frontend Hosting)
- Render (Backend Hosting)

---

## 📁 Project Structure

```
src/
 ├── app/
 ├── environments/
 │     ├── environment.ts
 │     └── environment.prod.ts
 └── assets/
```

Environment configuration automatically switches between:

- Local API → `http://localhost:3000`
- Production API → Render hosted backend

---

## ⚙️ Local Development Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/hassenkhrouf/crud-employees-angular.git
cd crud-employees-angular
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Backend (JSON Server)

```bash
npx json-server --watch db.json --port 3000
```

Backend runs at:

```
http://localhost:3000
```

### 4️⃣ Start Angular App

```bash
ng serve
```

Open:

```
http://localhost:4200
```

---

## 🏗 Production Build

To build the production version:

```bash
ng build --configuration production
```

Angular automatically uses `environment.prod.ts` for the production API URL.

---

## 📡 API Structure

Endpoint:

```
/employees
```

Sample Employee Object:

```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "dob": "date",
  "gender": "string",
  "education": "string",
  "company": "string",
  "experience": "number",
  "package": "number"
}
```

---

## 📚 What This Project Demonstrates

- Component-based architecture
- Angular Material UI integration
- REST API consumption
- CRUD operations
- Environment configuration
- Cloud deployment workflow
- Git version control

---

## 🚀 Future Improvements

- Authentication (Login/Register)
- Backend pagination
- Search & filtering
- Replace JSON Server with Express or Spring Boot
- Docker support

---

## 👤 Author

**Hassen Khrouf**  
Full Stack Developer (Angular + Spring Boot)
