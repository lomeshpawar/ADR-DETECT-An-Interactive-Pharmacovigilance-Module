@echo off
title ADR-DETECT Launcher
echo ========================================================
echo Launching ADR-DETECT Full Stack Application...
echo ========================================================
start "ADR-DETECT Backend" "%~dp0start_backend.bat"
timeout /t 3 /nobreak >nul
start "ADR-DETECT Frontend" "%~dp0start_frontend.bat"
echo.
echo Both servers are launching in separate windows!
echo Vite will print the frontend URL in its terminal window.
echo Backend API will be at: http://localhost:8085
echo Swagger Docs will be at: http://localhost:8085/swagger-ui.html
echo.
