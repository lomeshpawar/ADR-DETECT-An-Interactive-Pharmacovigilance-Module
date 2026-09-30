# ADR-DETECT: An Interactive Pharmacovigilance Module
> **"Detect -> Assess -> Intervene -> Report"**  
> *Good Pharmacovigilance Helps in Patient Safety*

ADR-DETECT is an interactive, data-driven educational healthcare web application designed to train pharmacy students, clinical pharmacologists, and medical learners on Adverse Drug Reaction (ADR) detection, causality assessment, clinical intervention, and standardized reporting.

## 🌐 Live Demo

**Frontend – GitHub Pages:**  
https://lomeshpawar.github.io/ADR-DETECT-An-Interactive-Pharmacovigilance-Module/

> The frontend is deployed as a static React/Vite application through **GitHub Pages + GitHub Actions**. The Spring Boot backend is a separate service and is not hosted by GitHub Pages.

## ⚡ Quick Start on Windows (No Bash Required)

You can run the application locally using the provided Windows batch files or Windows PowerShell.

### Option 1: 1-Click Launcher

- Double-click **`start_all.bat`** in the project folder.
- It launches the Spring Boot backend and React frontend.

### Option 2: Windows PowerShell

#### Backend

```powershell
cd "backend"
mvn spring-boot:run
```

Backend:

```text
http://localhost:8085
```

Swagger API Docs:

```text
http://localhost:8085/swagger-ui.html
```

H2 Console:

```text
http://localhost:8085/h2-console
```

#### React Frontend

```powershell
cd "frontend"
npm install
npm run dev
```

Local frontend:

```text
http://localhost:3000
```

### Option 3: Windows Command Prompt

Backend:

```cmd
cd backend
mvn spring-boot:run
```

Frontend:

```cmd
cd frontend
npm install
npm run dev
```

## 🌟 Key Features & 5-Station Architecture

1. **🔵 Station 1: Patient Case**
   - Patient profile, demographics, vitals, diagnosis, and current medication regimen.
2. **🟢 Station 2: Detective Station**
   - Interactive clinical clue cards covering medicine history, timeline, past history, allergy history, lab reports, and dechallenge/rechallenge.
3. **🟡 Station 3: ADR Assessment**
   - Suspected drug identification, adverse reaction identification, configurable Reaction Type (A-F), severity, and WHO-UMC causality.
4. **🟣 Station 4: Pharmacist Intervention**
   - Clinical intervention actions such as stopping a drug, adjusting dosage, symptomatic care, referral, and monitoring.
5. **🔴 Station 5: ADR Reporting**
   - Standardized digital pharmacovigilance reporting form.
6. **100-Point Scoring Engine**
   - Suspected Drug (15) + Reaction (15) + Type A-F (20) + Severity (15) + Causality (15) + Intervention (10) + Reporting (10) = 100 Points.

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, JavaScript |
| Backend | Java, Spring Boot |
| API Documentation | Swagger / OpenAPI |
| Database | H2 / backend-configured persistence |
| Frontend Hosting | GitHub Pages |
| Deployment | GitHub Actions |

## ☁️ GitHub Pages Deployment

The repository contains a GitHub Actions workflow at:

```text
.github/workflows/pages.yml
```

The deployment flow is:

```text
GitHub Repository
       │
       ▼
GitHub Actions
       │
       ├── npm ci
       ├── Vite production build
       └── Upload Pages artifact
       │
       ▼
GitHub Pages
```

The Vite build uses the repository project path as its Pages base path so static assets resolve correctly on the project site.

To deploy an update:

```bash
git add frontend .github/workflows/pages.yml
git commit -m "update: frontend"
git push origin main
```

GitHub Actions automatically rebuilds and publishes the frontend.

## 🔒 Medical Safety Disclaimer

> **ADR-DETECT** is an interactive educational simulation designed strictly for teaching pharmacovigilance principles. It does not replace professional medical judgment, official regulatory ADR reporting programs (such as PvPI or MedWatch), or institutional clinical guidelines.

## 👨‍💻 Author

**Lomesh Pawar**

GitHub: https://github.com/lomeshpawar
