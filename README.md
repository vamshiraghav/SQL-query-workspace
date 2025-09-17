# SQL Query Runner Web Application

## 📌 Problem Statement
Create, design, and implement a **web-based application** capable of running SQL queries and displaying the results.  
The application includes:
- A space to accept SQL queries (via textarea/code editor).
- A **Run** button to execute queries.
- A table to display results.  
> ⚡ Note: This is a dummy application. No backend/query engine is involved. Predefined queries and static tables are used for demonstration.

---

## 🎥 Walkthrough Video
[YouTube Demo Video](https://www.youtube.com/watch?v=5JfH0gK0-HE)

---

## 🔗 Live Demo & Code
- **Live App on Vercel**: [https://sql-query-workspace.vercel.app/](https://sql-query-workspace.vercel.app/)  
- **GitHub Repository**: [https://github.com/vamshiraghav/SQL-query-workspace](https://github.com/vamshiraghav/SQL-query-workspace)

---

## 🛠 Tech Stack
- **ReactJS** – Frontend framework  
- **Material UI** – UI components library  

---

## ⚡ Features
- Input box (textarea) for SQL queries.  
- Predefined queries and dummy tables.  
- Multiple query → result table mappings.  
- Clean, responsive UI with Material UI components.  

---

## ⏱ Page Load Time
- **Measured using Lighthouse & Chrome DevTools**  
- Average load time: **~1.2s** on a 4G network  

---

## 🚀 Optimisations
- Code splitting for faster load.  
- Used Material UI’s tree-shaking to reduce bundle size.  
- Cached assets via Vercel’s CDN.  

---

## 📝 How to Run Locally
```bash
# Clone repository
git clone https://github.com/vamshiraghav/SQL-query-workspace

# Navigate to project
cd sql-query-workspace

# Install dependencies
npm install

# Start development server
npm run dev
