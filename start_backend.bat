@echo off
title ADR-DETECT Backend (Spring Boot)
echo ========================================================
echo Starting ADR-DETECT Spring Boot Backend on Port 8085...
echo ========================================================
cd /d "%~dp0backend"
set "PATH=C:\Users\Lomesh Pawar\tools\apache-maven-3.9.8\bin;%PATH%"
call mvn spring-boot:run
pause
