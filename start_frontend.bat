@echo off
title ADR-DETECT Frontend (React)
echo ========================================================
echo Starting ADR-DETECT React Frontend on Port 3000...
echo ========================================================
cd /d "%~dp0frontend"
set "PATH=C:\Users\Lomesh Pawar\tools\node-v20.17.0-win-x64;%PATH%"
call npm run dev
pause
