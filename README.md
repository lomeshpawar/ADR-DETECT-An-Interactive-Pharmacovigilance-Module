# ADR-DETECT — Interactive Pharmacovigilance Learning Module

> An educational web simulation for practicing adverse drug reaction (ADR) detection, causality assessment, intervention planning, and structured reporting.

## Live frontend

**[Open ADR-DETECT on GitHub Pages](https://lomeshpawar.github.io/ADR-DETECT-An-Interactive-Pharmacovigilance-Module/)**

GitHub Pages publishes the React/Vite frontend as a static site. The current learning workflow runs in the browser; the separate Spring Boot backend is not hosted by GitHub Pages. Confirm backend-dependent functionality independently before describing the entire stack as publicly live.

## Learning workflow

The application organizes a practice case into five learning stations:

1. **Patient case** — review a simulated patient profile, observations, and medication history.
2. **Detective station** — inspect clues and timelines relevant to a suspected reaction.
3. **ADR assessment** — practice selecting a suspected drug, reaction, reaction type, severity, and causality assessment.
4. **Intervention** — explore possible pharmacist intervention and monitoring choices.
5. **Reporting** — complete a structured educational report and review the generated result.

The module also includes a case bank, dashboard, learning content, and project information pages.

## Technology stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, JavaScript |
| Routing | React Router |
| HTTP client | Axios |
| UI and icons | Tailwind CSS, Lucide React |
| Backend | Java, Spring Boot |
| API documentation | Swagger / OpenAPI |
| Frontend hosting | GitHub Pages |
| Deployment automation | GitHub Actions |

## Repository structure

```text
ADR-DETECT-An-Interactive-Pharmacovigilance-Module/
├── frontend/                 # React/Vite application
│   ├── src/
│   │   ├── components/       # Shared UI components
│   │   ├── context/          # Case workflow state
│   │   └── pages/            # Home, cases, workflow, results, learn
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Spring Boot service
├── .github/workflows/
│   └── pages.yml             # Build and deploy frontend
├── start_all.bat             # Windows local launcher
├── start_backend.bat
└── start_frontend.bat
```

## Run locally on Windows

### Frontend

```powershell
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite in the terminal.

### Backend

In a separate terminal:

```powershell
cd backend
mvn spring-boot:run
```

The repository's local configuration uses port `8085` for the backend. API-dependent features require the backend to be running and the frontend API configuration to match it.

Alternatively, use the provided `start_all.bat`, `start_backend.bat`, and `start_frontend.bat` launchers on Windows.

## GitHub Pages deployment

The workflow at `.github/workflows/pages.yml` installs the frontend dependencies, builds the Vite application with the repository path as the base URL, and publishes the build output to GitHub Pages.

After pushing frontend changes to `main`, open **Actions** and verify the latest **Deploy Frontend to GitHub Pages** workflow completes successfully.

## Important scope and safety notice

ADR-DETECT is an educational simulation, not a clinical decision-support system. It must not be used to diagnose or treat patients, make actual prescribing decisions, or replace professional medical judgment, institutional protocols, or official adverse-reaction reporting programs. Use only fictional or appropriately de-identified case information.

## Project status

Academic learning application. The static React frontend is published through GitHub Pages; backend-dependent functionality requires the separate Spring Boot service to be available and configured.

## Author

**Lomesh Pawar** · [GitHub](https://github.com/lomeshpawar)
