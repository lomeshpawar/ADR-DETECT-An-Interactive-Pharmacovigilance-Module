# ADR-DETECT: An Interactive Pharmacovigilance Module
> **"Detect -> Assess -> Intervene -> Report"**
> *Good Pharmacovigilance Helps in Patient Safety*

ADR-DETECT is an interactive, data-driven educational healthcare web application designed to train pharmacy students, clinical pharmacologists, and medical learners on Adverse Drug Reaction (ADR) detection, causality assessment, clinical intervention, and standardized reporting.

---

## ⚡ Quick Start on Windows (No Bash Required)

You can run the application with **1-click** using the provided Windows batch files or Windows PowerShell.

### Option 1: 1-Click Double-Click Launcher (Easiest)
- Simply double-click **`start_all.bat`** in the project folder.
- It will automatically launch both the Spring Boot Backend and the React Frontend in their own windows.

---

### Option 2: Run via Windows PowerShell

#### 1. Start the Spring Boot Backend (Window 1):
```powershell
cd "backend"
$env:Path = "C:\Users\Lomesh Pawar\tools\apache-maven-3.9.8\bin;" + $env:Path
mvn spring-boot:run
```
- Backend will run at: **`http://localhost:8085`**
- Swagger API Docs: **`http://localhost:8085/swagger-ui.html`**
- H2 Console: **`http://localhost:8085/h2-console`**

#### 2. Start the React Frontend (Window 2):
```powershell
cd "frontend"
$env:Path = "C:\Users\Lomesh Pawar\tools\node-v20.17.0-win-x64;" + $env:Path
npm run dev
```
- Frontend will run at: **`http://localhost:3000`**

---

### Option 3: Run via Windows Command Prompt (CMD)

#### Backend (Window 1):
```cmd
cd backend
set PATH=C:\Users\Lomesh Pawar\tools\apache-maven-3.9.8\bin;%PATH%
mvn spring-boot:run
```

#### Frontend (Window 2):
```cmd
cd frontend
set PATH=C:\Users\Lomesh Pawar\tools\node-v20.17.0-win-x64;%PATH%
npm run dev
```

---

## 🌟 Key Features & 5-Station Architecture

1. **🔵 Station 1: Patient Case**
   - Patient profile, demographics, vitals, diagnosis, and current medication regimen.
2. **🟢 Station 2: Detective Station**
   - 6 interactive clinical clue cards (*Medicine History, Timeline, Past History, Allergy History, Lab Reports, Dechallenge/Rechallenge*).
3. **🟡 Station 3: ADR Assessment**
   - Suspected drug identification, adverse reaction identification, configurable **Reaction Type (A-F)** classification (20 pts), severity, and WHO-UMC causality.
4. **🟣 Station 4: Pharmacist Intervention**
   - Multi-select clinical actions (*Stop drug, adjust dosage, symptomatic care, refer, monitor*).
5. **🔴 Station 5: ADR Reporting**
   - Standardized digital pharmacovigilance reporting form.

6. **100-Point Scoring Engine**:
   - Suspected Drug (15) + Reaction (15) + Type A-F (20) + Severity (15) + Causality (15) + Intervention (10) + Reporting (10) = 100 Points.

---

## 🔒 Medical Safety Disclaimer
> **ADR-DETECT** is an interactive educational simulation designed strictly for teaching pharmacovigilance principles. It does not replace professional medical judgment, official regulatory ADR reporting programs (such as PvPI or MedWatch), or institutional clinical guidelines.
