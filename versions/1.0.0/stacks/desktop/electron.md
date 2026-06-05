# Electron Stack Rules

## Architecture
- Desktop application with web technologies
- Main process (Node.js) + Renderer process (Chromium)
- IPC for main ↔ renderer communication
- Preload scripts for secure context bridging

## Project Structure
- `src/main/` — main process code
- `src/renderer/` — UI code (React/Vue/Svelte)
- `src/preload/` — preload scripts (context bridge)
- `src/shared/` — shared types and constants
- `resources/` — app icons and native assets

## Rules
- Never use `nodeIntegration: true` — use contextBridge
- All IPC channels must be explicitly defined
- Main process handles file system, native APIs, system tray
- Renderer handles UI only — no direct Node.js access
- Use preload scripts to expose safe APIs to renderer

## IPC Communication
- Define typed IPC channels
- Use `ipcMain.handle` / `ipcRenderer.invoke` for request/response
- Use `ipcMain.on` / `webContents.send` for events
- Validate all IPC payloads in main process

## Security
- Enable `contextIsolation: true`
- Disable `nodeIntegration`
- Use Content Security Policy headers
- Validate all file paths before filesystem access
- Never expose full Node.js API to renderer

## Window Management
- Use `BrowserWindow` for app windows
- Handle window lifecycle events (close, minimize, focus)
- Support system tray if applicable
- Remember window position and size

## Performance
- Minimize main process blocking
- Use web workers for heavy computation in renderer
- Lazy load renderer modules
- Monitor memory usage — Electron apps can be heavy

## Build & Distribution
- Use electron-builder or electron-forge
- Code sign for macOS and Windows
- Auto-update via electron-updater
- Test on all target platforms
