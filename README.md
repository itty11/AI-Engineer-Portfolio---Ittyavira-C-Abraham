# 🤖 Ittyavira C Abraham — AI Engineer Portfolio

> Personal portfolio website built with React, Bootstrap, Django REST Framework, and MongoDB Atlas.

---


---

## 📁 Project Structure

```
Portfolio/
│
├── .gitignore
├── README.md
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   ├── portfolio.html          ← Main portfolio (Bootstrap standalone)
│   │   ├── photo.jpg               ← Profile photo
│   │   ├── ai_avatar.png           ← Tab favicon
│   │   └── Ittyavira_C_Abraham_AI_Engineer_Resume.pdf
│   └── src/
│       ├── index.jsx               ← React 18 entry point
│       ├── App.jsx                 ← Root component
│       ├── data/
│       │   └── portfolioData.js    ← All content lives here
│       ├── hooks/
│       │   └── useScrollSpy.js
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── Experience.jsx
│       │   └── Contact.jsx
│       └── styles/
│           ├── _variables.scss
│           ├── global.scss
│           ├── Navbar.scss
│           ├── Hero.scss
│           ├── Skills.scss
│           ├── Projects.scss
│           ├── Experience.scss
│           └── Contact.scss
│
└── backend/
    ├── manage.py
    ├── requirements.txt
    ├── .env                        ← Never uploaded to GitHub
    ├── .env.example                ← Safe template for others
    ├── portfolio_project/
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    └── contact/
        ├── __init__.py
        ├── mongo.py                ← MongoDB Atlas connection
        ├── views.py                ← Contact API endpoints
        ├── urls.py
        ├── admin.py
        └── migrations/
            └── __init__.py
```

---

## 🧠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| HTML5 / CSS3 | Structure and styling |
| SCSS / Bootstrap 5 | Responsive layout and components |
| JavaScript | Interactivity and form handling |
| React 18 | Component-based architecture |
| JetBrains Mono / Syne / Mulish | Typography |

### Backend
| Technology | Purpose |
|---|---|
| Python | Core language |
| Django 5 | Web framework |
| Django REST Framework | API endpoints |
| pymongo | MongoDB driver |
| python-dotenv | Environment variable management |

### Database & Cloud
| Technology | Purpose |
|---|---|
| MongoDB Atlas | NoSQL cloud database for contact messages |
| SQLite | Django admin and auth tables |

---

## ✨ Features

- Responsive dark-themed portfolio design
- Smooth scroll navigation with active link highlighting
- Animated hero section with profile photo
- Skills section with 6 color-coded category cards
- 4 featured AI/ML project cards with GitHub links
- Work experience timeline + education + certifications
- Contact form connected to Django REST API
- Messages saved to MongoDB Atlas
- Django admin panel to view received messages

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- MongoDB Atlas account (free)

---

### Frontend (Bootstrap — no install needed)

Just open directly in browser:
```
frontend/public/portfolio.html
```

---

### Frontend (React)

```bash
cd frontend
npm install
npm start
```
Opens at → http://localhost:3000

---

### Backend (Django)

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```
Opens at → http://127.0.0.1:8000

---

## 🔑 Environment Variables

Create `backend/.env` file:

```
SECRET_KEY=your-django-secret-key
DEBUG=True
MONGO_DB_NAME=portfolio_db
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db
```

Generate Django secret key:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contact/` | Save contact message to MongoDB |
| GET | `/api/contact/messages/` | List all messages |
| GET | `/api/contact/messages/:id/` | Get single message |
| PATCH | `/api/contact/messages/:id/` | Mark as read |
| DELETE | `/api/contact/messages/:id/` | Delete message |

---

## 📬 View Messages

**Django Admin:**
```
http://127.0.0.1:8000/admin/
```

**API:**
```
http://127.0.0.1:8000/api/contact/messages/
```

---

## 🧠 AI & ML Skills Covered

- Machine Learning — Linear Regression, Logistic Regression, kNN, SVM, Random Forest, XGBoost, PCA, K-Means
- Deep Learning — TensorFlow, LSTM, SARIMA, Time Series Forecasting
- Generative AI & NLP — Transformers, RAG, Prompt Engineering, LangChain, Hugging Face, OpenAI APIs
- Backend — Python, FastAPI, Django, Streamlit
- Frontend — React, Tailwind CSS, Bootstrap, JavaScript, HTML/CSS/SCSS
- Data & Cloud — PostgreSQL, MongoDB, SQL, GCP, Azure, Git & GitHub

---

## 📂 Featured Projects

| Project | Tech | Link |
|---|---|---|
| RAG Chatbot System | LangChain, Gradio, GenAI | [GitHub](https://github.com/itty11/AI-RAG-Assistant-using-LangChain-Final-Project-IBM-GenAI-Capstone-) |
| AI Resume Enhancer | Transformers, Hugging Face | [GitHub](https://github.com/itty11/Resume-Enhancer-using-Hugging-Face-Transformers) |
| Smart Health Risk Predictor | XGBoost, Random Forest | [GitHub](https://github.com/itty11/Smart-Health-Risk-Predictor) |
| BERT News Classifier | BERT, NLP | [GitHub](https://github.com/itty11/BERT-based-News-Classifier) |

---

## 📤 Deployment

| Part | Platform |
|---|---|
| Frontend | GitHub Pages / Vercel |
| Backend | Render |
| Database | MongoDB Atlas ✅ |

---

## 🔒 Security

- API keys and secrets stored in `.env` file
- `.env` is listed in `.gitignore` — never uploaded to GitHub
- MongoDB Atlas IP whitelisted
- CORS configured for allowed origins only

---

## 📬 Contact

- **Email** — ittyavirac.abraham@gmail.com
- **GitHub** — [github.com/itty11](https://github.com/itty11)
- **LinkedIn** — [linkedin.com/in/ittyavira-c-abraham-5435621b7](https://www.linkedin.com/in/ittyavira-c-abraham-5435621b7/)

---


---

*Built with ❤️ by Ittyavira C Abraham*
