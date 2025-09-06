@echo off
setlocal enabledelayedexpansion

echo ====================================
echo Optimizing videos in /public/home and /public/services
echo ====================================

if not exist "public\home" (
    echo ERROR: public\home not found! 
    echo Make sure you're in the Next.js root directory.
    pause
    exit /b 1
)

REM Create output directories
if not exist "public\home\optimized" mkdir "public\home\optimized"  
if not exist "public\services\optimized" mkdir "public\services\optimized"

set /a total=0

echo Processing /public/home videos...
cd public\home
for %%f in (*.mov *.mp4 *.avi *.mkv) do (
    set /a total+=1
    echo [!total!] %%f
    ffmpeg -i "%%f" -vcodec libx264 -crf 28 -preset fast -vf scale=-2:720 -movflags +faststart "optimized\%%~nf-optimized.mp4" -y -loglevel warning
    if !ERRORLEVEL! EQU 0 (echo ✓ Success) else (echo ✗ Failed)
)

cd ..\services  
echo Processing /public/services videos...
for %%f in (*.mov *.mp4 *.avi *.mkv) do (
    set /a total+=1
    echo [!total!] %%f
    ffmpeg -i "%%f" -vcodec libx264 -crf 28 -preset fast -vf scale=-2:720 -movflags +faststart "optimized\%%~nf-optimized.mp4" -y -loglevel warning
    if !ERRORLEVEL! EQU 0 (echo ✓ Success) else (echo ✗ Failed)
)

cd ..\..
echo Complete! Processed !total! videos total.
pause