@echo off
title ADR-DETECT Backend (Spring Boot)
echo ========================================================
echo Starting ADR-DETECT Spring Boot Backend on Port 8085...
echo ========================================================
cd /d "%~dp0backend"
call mvn spring-boot:run
pause
