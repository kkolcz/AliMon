# ReactJS AliMon

AliMon is a web application for tracking shipments on a single, centralized platform.  
It allows users to efficiently manage all their packages, monitor shipment statuses, and maintain a clear overview of their deliveries.

## Preview

### Landing page (before login)

<p align="center">
  <img width="1013" height="715" alt="Zrzut ekranu 2025-10-15 01:43:33" src="https://github.com/user-attachments/assets/2cb6f51c-7bd1-49f2-b3c5-3fa8bbdf0bb7" />
</p>

<br/>

### Application dashboard

<p align="center">
  <img width="998" height="942" alt="Zrzut ekranu 2025-10-15 01:46:41" src="https://github.com/user-attachments/assets/93b6f7a4-fcc3-41d5-bdbc-73b1c7624a33" />
</p>

## Live demo

[Demo](https://reactjs-alimon.netlify.app)

## How to run?

### 1. Clone repository and install dependencies

```
git clone https://github.com/kkolcz/reactjs-alimon.git
cd reactjs-alimon
npm install
```

### 2. Configure environment variables

This application uses **Google Firebase** (Authentication and Firestore Database).  
Configuration is handled via a `.env` file located in the project root.

A sample configuration file is provided as `.env.example`.  
You can copy it and fill in your Firebase credentials.

### 3. Development server

Run `npm start`.
The application will start at `http://localhost:3000`.

### 4. Build

Run `npm run build` to build the project.
Builded project will be stored in the `build/` directory.
