@echo off
title Jose Rivera Tech - Catalogo de Accesorios y Repuestos
color 0E
echo ========================================================
echo       JOSE RIVERA TECH - ACCESORIOS & CONVENIENCIA
echo              WhatsApp: +57 301 476 8000
echo ========================================================
echo.
echo [1/2] Verificando archivos locales...
cd /d "%~dp0"

echo [2/2] Abriendo plataforma en tu navegador...
echo.

:: Intenta iniciar servidor local ultra-ligero con Python en un puerto dinámico disponible
python -c "import http.server, webbrowser, socket; s=socket.socket(); s.bind(('', 0)); port=s.getsockname()[1]; s.close(); webbrowser.open(f'http://localhost:{port}'); http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=port)" 2>nul

:: Si Python no está instalado, abre directamente index.html en el navegador predeterminado
if %ERRORLEVEL% NEQ 0 (
    echo Abriendo directamente en el navegador...
    start "" "index.html"
)

echo.
echo Jose Rivera Tech esta corriendo exitosamente.
echo ========================================================
