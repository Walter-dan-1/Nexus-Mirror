/**
 * =====================================================
 * Nexus Mirror
 * File: window.ts
 * Purpose: Window IPC Handlers
 * =====================================================
 */
import { ipcMain } from "electron";
export function registerWindowHandlers(window) {
    ipcMain.handle("window:minimize", () => {
        window.minimize();
    });
    ipcMain.handle("window:maximize", () => {
        if (window.isMaximized()) {
            window.unmaximize();
        }
        else {
            window.maximize();
        }
    });
    ipcMain.handle("window:close", () => {
        window.close();
    });
}
//# sourceMappingURL=window.js.map