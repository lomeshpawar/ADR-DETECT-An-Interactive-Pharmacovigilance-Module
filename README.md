# ADR-DETECT — Interactive Pharmacovigilance Training Module

> **Detect → Assess → Intervene → Report**

ADR-DETECT is a full-stack educational web application for practicing the core workflow of **adverse drug reaction (ADR) detection and pharmacovigilance assessment**. It combines a React frontend with a Spring Boot REST API and a relational data layer, with a transparent 100-point assessment engine.

> **Safety notice:** This project is an educational simulation. It does not provide medical advice, replace clinical judgment, or submit real pharmacovigilance reports. All included case data is synthetic/demo data.

## ✨ What the project demonstrates

- React single-page application with routed learning and assessment workflows
- Spring Boot REST API with controller/service/repository separation
- DTO and validation-based API boundaries
- JPA/Hibernate persistence with H2 for local development and MySQL configuration support
- OpenAPI/Swagger documentation for the backend API
- Five-stage ADR learning workflow
- Deterministic 100-point educational scoring model
- Automated backend tests and frontend production build checks through GitHub Actions
- Environment-based database, CORS, and frontend API configuration

## 🧭 Five-station workflow

| Station | Purpose | Example activities |
| --- | --- | --- |
| 1. Patient Case | Understand the case | Demographics, diagnosis, vitals, medicines |
| 2. Detective | Gather evidence | Medicine history, timeline, allergies, labs, dechallenge/rechallenge |
| 3. ADR Assessment | Classify the reaction | Suspected drug, reaction, Type A–F, severity, WHO-UMC causality |
| 4. Intervention | Select a response | Stop/adjust medicine, symptomatic care, referral, monitoring |
| 5. Reporting | Practice reporting | Structured ADR report workflow |

### Scoring model

The application uses a transparent **100-point educational scoring model**:

- Suspected drug — 15
- Reaction — 15
- Type A–F classification — 20
- Severity — 15
- Causality — 15
- Intervention — 10
- Reporting — 10

The scoring rules are implemented in the application code; they are not intended to represent a validated clinical assessment instrument.

## 🏗️ Architecture

```text
React + Vite
    │
    │ HTTP / JSON (Axios)
    ▼
Spring Boot REST API
    │
    ├── Controllers
    ├── DTOs + Validation
    ├── Services / Scoring
    ├── Repositories
    └── JPA / Hibernate
    │
    ▼
H2 (local) / MySQL (configurable)
```

See [docs/architecture.md](docs/architecture.md) for component responsibilities and configuration.

## 📁 Repository structure

```
.
├── backend/
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/adrdetect/
│       │   ├── config/
│       │   ├── controller/
│       │   ├── dto/
│       │   ├── entity/
│       │   ├── enums/
│       │   ├── exception/
│       │   ├── repository/
│       │   └── service/
│       ├── main/resources/
│       │   ├── application.properties
│       │   ├── schema.sql
│       │   └── data.sql
│       └── test/java/com/adrdetect/
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── components/
│       ├── context/
│       ├── data/
│       ├── pages/
│       ├── services/
│       └── utils/
├── docs/
├── .github/workflows/
├── .env.example
└── README.md
```

Generated directories such as `backend/target`, `frontend/node_modules`, and `frontend/dist` are intentionally excluded from Git.

## 🛠️ Technology stack

**Frontend:** React 18, Vite, React Router, Axios, Tailwind CSS, Lucide React

**Backend:** Java 21, Spring Boot 3.3.4, Spring Web, Spring Data JPA/Hibernate, Spring Validation, Springdoc OpenAPI, Maven

**Data:** H2 for the default local environment; MySQL configuration support

## 🚀 Local setup

### Prerequisites

- Java 21+
- Maven 3.9+
- Node.js 20+
- npm
- MySQL only when using MySQL instead of the default H2 database

No machine-specific paths are required.

### 1. Clone

```bash
git clone https://github.com/lomeshpawar/ADR-DETECT-An-Interactive-Pharmacovigilance-Module.git
cd ADR-DETECT-An-Interactive-Pharmacovigilance-Module
```

### 2. Configure the backend

The default configuration uses an in-memory H2 database and synthetic seed data, so no database server is required for a basic local run.

For custom configuration, use [backend/.env.example](backend/.env.example) as the reference for environment variables. **Never commit real passwords or secrets.**

### 3. Start the backend

```bash
cd backend
mvn spring-boot:run
```

Default endpoints:

- API base: `http://localhost:8085/api`
- Swagger UI: `http://localhost:8085/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8085/api-docs`

The H2 console is disabled by default. Enable it only for local development with `H2_CONSOLE_ENABLED=true` when required.

### 4. Start the frontend

Open a second terminal:

```bash
cd frontend
npm ci
npm run dev
```

Vite prints the local URL in the terminal. For split frontend/backend development, set `VITE_API_URL=http://localhost:8085/api` and configure `CORS_ALLOWED_ORIGINS` on the backend.

### 5. Build

Frontend:

```bash
cd frontend
npm run build
```

Backend:

```bash
cd backend
mvn -B clean package
```

## 🧪 Testing and CI

Run backend tests with:

```bash
cd backend
mvn -B test
```

GitHub Actions runs on pushes and pull requests targeting `main` and performs:

- Java 21 + Maven backend tests
- Node.js 20 + locked frontend dependency installation
- Frontend production build

The workflow is intentionally small and focused on reproducible build health.

## 🔐 Security and configuration

- Real credentials must be supplied through environment variables, never committed.
- H2 console access is disabled by default.
- CORS origins are configurable rather than globally open.
- `.env` files, build outputs, IDE metadata, and dependency directories are ignored by Git.
- The repository contains educational/synthetic case data only.

See [SECURITY.md](SECURITY.md) for responsible reporting guidance.

## 📚 Documentation

- [Architecture](docs/architecture.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)

## 🧩 Limitations

This is an educational simulation, not a production pharmacovigilance platform. It does not claim regulatory certification, clinical validation, real-patient processing, or integration with official reporting systems.

## 🔭 Future improvements

Potential engineering improvements include:

- Expand automated unit and API-level test coverage
- Add frontend component and workflow tests
- Add structured API error responses across all endpoints
- Add database migration tooling for production-style deployments
- Add containerized local development only if it improves reproducibility
- Add accessibility and automated UI checks

Future work should be added only when it provides genuine project value.

## 📄 License

No open-source license is currently declared. Until a license is added, the repository should be treated as source-available for viewing and learning rather than software granted for unrestricted reuse.

## 👤 Author

**Lomesh Pawar** · [GitHub](https://github.com/lomeshpawar)
