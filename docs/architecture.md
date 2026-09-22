# Architecture Overview

ADR-DETECT follows a conventional two-tier full-stack architecture with a React client and Spring Boot REST API.

## Components

### Frontend

The React/Vite application owns navigation, workflow state, presentation, user input, and API calls. The code is organized around pages, reusable components, context, services, and utility/scoring modules.

### Backend

The Spring Boot application exposes REST endpoints through controllers. DTOs define API payload boundaries, services contain application/business logic, repositories isolate persistence, and JPA entities represent stored domain data.

### Data layer

H2 is the default local database so a developer can run the application without provisioning MySQL. MySQL can be selected through environment variables for a relational database setup.

## Request flow

```text
Browser
  │
  │ JSON / HTTP
  ▼
React service layer
  │
  ▼
Spring Boot controller
  │
  ▼
DTO validation
  │
  ▼
Service / scoring logic
  │
  ▼
Repository
  │
  ▼
H2 or MySQL
```

## Configuration principles

- Runtime configuration is supplied through environment variables where values differ between environments.
- The H2 console is disabled by default.
- CORS is restricted to configured frontend origins.
- No real patient or credential data belongs in the repository.

## Design priorities

1. Keep clinical/educational rules explicit and testable.
2. Keep controllers thin and business logic in services.
3. Keep database configuration environment-driven.
4. Prefer reproducible local setup over machine-specific instructions.
5. Avoid introducing infrastructure complexity without a real project requirement.
