@echo off
setlocal
cd /d "%~dp0"
echo Instalando dependencias somente do cache local...
call npm ci --include=optional --offline --cache .npm-cache
if errorlevel 1 (
  echo A instalacao offline falhou. Verifique se a pasta .npm-cache foi extraida junto com o projeto.
  exit /b 1
)
echo Dependencias prontas. Execute npm run dev.
