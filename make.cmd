@IF EXIST "C:\Program Files\Git\git-bash.exe" (
  "C:\Program Files\Git\git-bash.exe"  "%~dp0\Makefile" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\Makefile" %*
)