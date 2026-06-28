# 🌱 PlantEasy

PlantEasy is a full-stack web application that helps users explore plant information, manage plant care, and access AI-powered plant guidance. The application consists of a React frontend and a FastAPI backend connected through REST APIs.

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* FastAPI
* Python
* Uvicorn

## Features

* Plant Library
* Plant Details
* REST API
* Search Functionality
* Dark Mode Support
* Responsive User Interface
* Loader Component
* Toast Notifications

## Project Structure

```
planteasy/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── venv/
│
├── src/
├── public/
├── package.json
└── README.md
```

## Running the Frontend

```bash
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

## Running the Backend

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment (first time only):

```bash
python -m venv venv
```

Activate it (Windows):

```bash
.\venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
python -m uvicorn main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

## API Endpoints

* GET `/plants`
* GET `/plants/{id}`
* POST `/plants`
* PUT `/plants/{id}`
* DELETE `/plants/{id}`
* GET `/plants/search?q=`

## Future Improvements

* Supabase Database Integration
* Gemini AI Plant Assistant
* User Authentication
* Plant Image Upload
* Plant Care Reminders
