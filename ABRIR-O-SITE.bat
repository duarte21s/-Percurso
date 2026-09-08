@echo off
chcp 65001 >nul
title Percurso - plataforma de estudos
cd /d "%~dp0"

echo.
echo   ============================================
echo    PERCURSO - plataforma de estudos
echo   ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo   [X] O Node.js nao esta instalado nesta maquina.
  echo.
  echo   Ele e necessario para rodar o site. Vou abrir o site
  echo   de download: baixe a versao LTS, instale clicando em
  echo   "Next" ate o fim, e depois rode este arquivo de novo.
  echo.
  start "" https://nodejs.org
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo   [1/2] Primeira vez: baixando as dependencias.
  echo         Isso demora cerca de 2 minutos e precisa de internet.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo   [X] A instalacao falhou. Quase sempre e conexao.
    echo       Confira a internet e rode este arquivo de novo.
    echo.
    pause
    exit /b 1
  )
  echo.
)

echo   [2/2] Subindo o site...
echo.
echo   O navegador abre sozinho em alguns segundos.
echo   Se nao abrir, entre em: http://localhost:3000
echo.
echo   Para FECHAR o site depois, aperte Ctrl + C aqui.
echo.

start "" /b powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 14; Start-Process 'http://localhost:3000'"

call npm run dev

echo.
echo   O site foi encerrado.
pause
