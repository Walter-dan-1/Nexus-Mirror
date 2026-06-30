/**
 * =====================================================
 * Nexus Mirror
 * File: main.ts
 * Purpose: Electron Main Process
 * =====================================================
 */
import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { registerSystemHandlers } from "../ipc/system.js";
import { registerWindowHandlers } from "../ipc/window.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let mainWindow = null;
function createMainWindow() {
    const preloadPath = path.join(__dirname, "../preload/preload.js");
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 850,
        minWidth: 1100,
        minHeight: 700,
        frame: false,
        titleBarStyle: "hidden",
        backgroundColor: "#111827",
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            preload: preloadPath,
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: false
        }
    });
    registerWindowHandlers(mainWindow);
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
        mainWindow.webContents.openDevTools();
    }
    else {
        mainWindow.loadFile(path.join(__dirname, "../../dist/index.html"));
    }
    mainWindow.once("ready-to-show", () => {
        mainWindow?.show();
    });
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}
app.whenReady().then(() => {
    registerSystemHandlers();
    createMainWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
//# sourceMappingURL=main.js.map