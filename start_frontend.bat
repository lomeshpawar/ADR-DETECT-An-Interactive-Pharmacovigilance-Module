@echo off
title ADR-DETECT Frontend (React)
echo ========================================================
echo Starting ADR-DETECT React Frontend...
echo ========================================================
cd /d "%~dp0frontend"
call npm run dev
pause
